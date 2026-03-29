import OpenAI from 'openai';
import { injectable } from 'tsyringe';
import {
  IAiService,
  ResumeEvaluationInput,
  ResumeEvaluationResult
} from '@/modules/users/services/interfaces/ai.service.interface';
import {
  BadRequestException,
  InternalServerErrorException
} from '@/core/exceptions/http.exception';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';

const DEFAULT_MODEL =
  process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.1-8b-instruct';
const DEFAULT_BASE_URL =
  process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1';
const DEFAULT_REFERER =
  process.env.OPENROUTER_REFERER || 'http://localhost:3000';
const DEFAULT_TITLE = process.env.OPENROUTER_TITLE || 'ResumeBot';

@injectable()
export class AiService implements IAiService {
  private client: OpenAI | null = null;

  private getClient(): OpenAI {
    if (this.client) return this.client;

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new BadRequestException('OPENROUTER_API_KEY is not configured');
    }

    this.client = new OpenAI({
      apiKey,
      baseURL: DEFAULT_BASE_URL
    });
    return this.client;
  }

  async evaluateResume(
    input: ResumeEvaluationInput
  ): Promise<ResumeEvaluationResult> {
    const client = this.getClient();

    const roleLine = input.role
      ? `Target role: ${input.role}`
      : 'Target role: not specified';

    const levelLine = input.targetLevel
      ? `Target level: ${input.targetLevel}`
      : 'Target level: not specified';

    const prompt = [
      'You are an expert resume reviewer and ATS specialist.',
      'Analyze the resume and provide concise, actionable feedback.',
      'Return ONLY valid JSON. No explanation, no markdown, no extra text.',
      'Format:',
      '{"score": number, "strengths": string[], "improvements": string[], "ats": string[], "summary": string}',
      roleLine,
      levelLine,
      'Resume:',
      input.resumeText
    ].join('\n');

    try {
      const response = await client.responses.create({
        model: DEFAULT_MODEL,
        input: prompt,
        max_output_tokens: 500,
        response_format: { type: 'json_object' },
        extra_headers: {
          'HTTP-Referer': DEFAULT_REFERER,
          'X-Title': DEFAULT_TITLE
        }
      } as any);

      const raw = (response.output_text || '').trim();
      const parsed = this.tryParseJson(raw);

      if (parsed) {
        return {
          score: typeof parsed.score === 'number' ? parsed.score : null,
          strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
          improvements: Array.isArray(parsed.improvements)
            ? parsed.improvements
            : [],
          ats: Array.isArray(parsed.ats) ? parsed.ats : [],
          summary:
            typeof parsed.summary === 'string'
              ? parsed.summary
              : 'Summary not provided.',
          raw
        };
      }

      return {
        score: null,
        strengths: [],
        improvements: [],
        ats: [],
        summary: raw || 'No feedback returned from AI.',
        raw
      };
    } catch (error) {
      const status = (error as { status?: number } | undefined)?.status;
      const message = error instanceof Error ? error.message : String(error);
      if (status === 429 || message.includes('429')) {
        return {
          score: null,
          strengths: [],
          improvements: ['AI quota exceeded, please try again later'],
          ats: [],
          summary: 'AI service temporarily unavailable.',
          raw: ''
        };
      }

      throw new InternalServerErrorException(
        'Failed to evaluate resume with AI',
        {
          error: message
        }
      );
    }
  }

  async evaluateResumeFromFile(
    file: Express.Multer.File,
    meta?: Omit<ResumeEvaluationInput, 'resumeText'>
  ): Promise<ResumeEvaluationResult> {
    const resumeText = await this.extractResumeText(file);

    return this.evaluateResume({
      resumeText,
      role: meta?.role,
      targetLevel: meta?.targetLevel
    });
  }

  private tryParseJson(raw: string): any | null {
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch {
      // fallback: extract JSON block if extra text exists
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch { }
      }
      return null;
    }
  }

  private async extractResumeText(
    file: Express.Multer.File
  ): Promise<string> {
    if (!file) {
      throw new BadRequestException('Resume file is required');
    }

    const { mimetype, buffer } = file;

    if (!buffer || buffer.length === 0) {
      throw new BadRequestException('Uploaded file is empty');
    }

    if (mimetype === 'application/pdf') {
      const parsed = await pdf(buffer);
      if (!parsed.text?.trim()) {
        throw new BadRequestException('Unable to extract text from PDF');
      }
      return parsed.text.trim();
    }

    if (
      mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const result = await mammoth.extractRawText({ buffer });
      const value = result.value?.trim();
      if (!value) {
        throw new BadRequestException('Unable to extract text from DOCX');
      }
      return value;
    }

    if (mimetype === 'text/plain') {
      const text = buffer.toString('utf8').trim();
      if (!text) {
        throw new BadRequestException('Uploaded text file is empty');
      }
      return text;
    }

    throw new BadRequestException(
      'Unsupported format. Upload PDF, DOCX, or TXT.'
    );
  }
}
