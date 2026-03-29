import { z } from 'zod';

export const aiValidation = {
  evaluateResume: z.object({
    resumeText: z
      .string({ required_error: 'resumeText is required' })
      .min(50, 'resumeText must be at least 50 characters')
      .max(20000, 'resumeText must be at most 20000 characters'),
    role: z.string().max(120).optional(),
    targetLevel: z.string().max(120).optional()
  })
};
