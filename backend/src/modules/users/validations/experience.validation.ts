import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createExperienceSchema = flatToNestedSchema(
  z.object({
  resumeId: z.string(),
  company: z.string(),
  role: z.string(),
  description: z.any(),
  startDate: z.string(),
  endDate: z.string(),
  }),
  data => ({
    resumeId: data.resumeId,
    company: data.company,
    role: data.role,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
  })
);

export const updateExperienceSchema = flatToNestedSchema(
  z.object({
    resumeId: z.string().optional(),
    company: z.string().optional(),
    role: z.string().optional(),
    description: z.any().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
  data => ({
    ...(data.resumeId !== undefined ? { resumeId: data.resumeId } : {}),
    ...(data.company !== undefined ? { company: data.company } : {}),
    ...(data.role !== undefined ? { role: data.role } : {}),
    ...(data.description !== undefined ? { description: data.description } : {}),
    ...(data.startDate !== undefined ? { startDate: data.startDate } : {}),
    ...(data.endDate !== undefined ? { endDate: data.endDate } : {}),
  })
);

export const experienceIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const experienceValidation = {
  create: createExperienceSchema,
  update: updateExperienceSchema,
  idParam: experienceIdParamSchema,
  search: searchQuerySchema
};
