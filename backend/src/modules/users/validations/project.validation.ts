import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createProjectSchema = flatToNestedSchema(
  z.object({
  resumeId: z.string(),
  title: z.string(),
  description: z.any(),
  techStack: z.string(),
  }),
  data => ({
    resumeId: data.resumeId,
    title: data.title,
    description: data.description,
    techStack: data.techStack,
  })
);

export const updateProjectSchema = flatToNestedSchema(
  z.object({
    resumeId: z.string().optional(),
    title: z.string().optional(),
    description: z.any().optional(),
    techStack: z.string().optional(),
  }),
  data => ({
    ...(data.resumeId !== undefined ? { resumeId: data.resumeId } : {}),
    ...(data.title !== undefined ? { title: data.title } : {}),
    ...(data.description !== undefined ? { description: data.description } : {}),
    ...(data.techStack !== undefined ? { techStack: data.techStack } : {}),
  })
);

export const projectIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const projectValidation = {
  create: createProjectSchema,
  update: updateProjectSchema,
  idParam: projectIdParamSchema,
  search: searchQuerySchema
};
