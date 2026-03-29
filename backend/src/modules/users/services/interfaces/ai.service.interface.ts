export type ResumeEvaluationInput = {
  resumeText: string;
  role?: string;
  targetLevel?: string;
};

export type ResumeEvaluationResult = {
  score: number | null;
  strengths: string[];
  improvements: string[];
  ats: string[];
  summary: string;
  raw: string;
};

export interface IAiService {
  evaluateResume(input: ResumeEvaluationInput): Promise<ResumeEvaluationResult>;
  evaluateResumeFromFile(
    file: Express.Multer.File,
    meta?: Omit<ResumeEvaluationInput, 'resumeText'>
  ): Promise<ResumeEvaluationResult>;
}
