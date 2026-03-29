import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createAuthSchema = flatToNestedSchema(
  z.object({
  userId: z.string(),
  github: z.boolean(),
  gmail: z.boolean(),
  email_otp: z.boolean(),
  is_opted: z.boolean(),
  }),
  data => ({
    userId: data.userId,
    github: data.github,
    gmail: data.gmail,
    email_otp: data.email_otp,
    is_opted: data.is_opted,
  })
);

export const updateAuthSchema = flatToNestedSchema(
  z.object({
    userId: z.string().optional(),
    github: z.boolean().optional(),
    gmail: z.boolean().optional(),
    email_otp: z.boolean().optional(),
    is_opted: z.boolean().optional(),
  }),
  data => ({
    ...(data.userId !== undefined ? { userId: data.userId } : {}),
    ...(data.github !== undefined ? { github: data.github } : {}),
    ...(data.gmail !== undefined ? { gmail: data.gmail } : {}),
    ...(data.email_otp !== undefined ? { email_otp: data.email_otp } : {}),
    ...(data.is_opted !== undefined ? { is_opted: data.is_opted } : {}),
  })
);

export const authIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const authValidation = {
  create: createAuthSchema,
  update: updateAuthSchema,
  idParam: authIdParamSchema,
  search: searchQuerySchema
};
