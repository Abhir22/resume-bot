import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createResumeSchema = flatToNestedSchema(
  z.object({
  userId: z.string(),
  filename: z.string(),
  feedback: z.any(),
  dataKeep: z.boolean(),
  }),
  data => ({
    userId: data.userId,
    filename: data.filename,
    feedback: data.feedback,
    dataKeep: data.dataKeep,
  })
);

export const updateResumeSchema = flatToNestedSchema(
  z.object({
    userId: z.string().optional(),
    filename: z.string().optional(),
    feedback: z.any().optional(),
    dataKeep: z.boolean().optional(),
  }),
  data => ({
    ...(data.userId !== undefined ? { userId: data.userId } : {}),
    ...(data.filename !== undefined ? { filename: data.filename } : {}),
    ...(data.feedback !== undefined ? { feedback: data.feedback } : {}),
    ...(data.dataKeep !== undefined ? { dataKeep: data.dataKeep } : {}),
  })
);

export const resumeIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const resumeValidation = {
  create: createResumeSchema,
  update: updateResumeSchema,
  idParam: resumeIdParamSchema,
  search: searchQuerySchema
};
