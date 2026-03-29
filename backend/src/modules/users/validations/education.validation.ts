import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createEducationSchema = flatToNestedSchema(
  z.object({
  resumeId: z.string(),
  school: z.string(),
  degree: z.string(),
  field: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  }),
  data => ({
    resumeId: data.resumeId,
    school: data.school,
    degree: data.degree,
    field: data.field,
    startDate: data.startDate,
    endDate: data.endDate,
  })
);

export const updateEducationSchema = flatToNestedSchema(
  z.object({
    resumeId: z.string().optional(),
    school: z.string().optional(),
    degree: z.string().optional(),
    field: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
  data => ({
    ...(data.resumeId !== undefined ? { resumeId: data.resumeId } : {}),
    ...(data.school !== undefined ? { school: data.school } : {}),
    ...(data.degree !== undefined ? { degree: data.degree } : {}),
    ...(data.field !== undefined ? { field: data.field } : {}),
    ...(data.startDate !== undefined ? { startDate: data.startDate } : {}),
    ...(data.endDate !== undefined ? { endDate: data.endDate } : {}),
  })
);

export const educationIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const educationValidation = {
  create: createEducationSchema,
  update: updateEducationSchema,
  idParam: educationIdParamSchema,
  search: searchQuerySchema
};
