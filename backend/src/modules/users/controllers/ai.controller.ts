import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { asyncHandler } from '@/core/middlewares/error.middleware';
import { SuccessResponse } from '@/core/utils/api-response';
import { ValidationUtil } from '@/core/utils/validate-and-transform';
import { aiValidation } from '@/modules/users/validations/ai.validation';
import { IAiService } from '@/modules/users/services/interfaces/ai.service.interface';

@injectable()
export class AiController {
  constructor(@inject('IAiService') private aiService: IAiService) {}

  evaluateResume = asyncHandler(async (req: Request, res: Response) => {
    if (req.file) {
      const role = typeof req.body.role === 'string' ? req.body.role : undefined;
      const targetLevel =
        typeof req.body.targetLevel === 'string' ? req.body.targetLevel : undefined;
      const result = await this.aiService.evaluateResumeFromFile(req.file, {
        role,
        targetLevel
      });
      return SuccessResponse.ok(result, 'Resume evaluated successfully').send(res);
    }

    const payload = ValidationUtil.validate(req.body, aiValidation.evaluateResume);
    const result = await this.aiService.evaluateResume(payload);
    return SuccessResponse.ok(result, 'Resume evaluated successfully').send(res);
  });
}
