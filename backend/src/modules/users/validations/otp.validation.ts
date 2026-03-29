import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createOTPSchema = flatToNestedSchema(
  z.object({
  email: z.string(),
  mobile: z.string(),
  code: z.string(),
  expiresAt: z.any(),
  attempts: z.number(),
  }),
  data => ({
    email: data.email,
    mobile: data.mobile,
    code: data.code,
    expiresAt: data.expiresAt,
    attempts: data.attempts,
  })
);

export const updateOTPSchema = flatToNestedSchema(
  z.object({
    email: z.string().optional(),
    mobile: z.string().optional(),
    code: z.string().optional(),
    expiresAt: z.any().optional(),
    attempts: z.number().optional(),
  }),
  data => ({
    ...(data.email !== undefined ? { email: data.email } : {}),
    ...(data.mobile !== undefined ? { mobile: data.mobile } : {}),
    ...(data.code !== undefined ? { code: data.code } : {}),
    ...(data.expiresAt !== undefined ? { expiresAt: data.expiresAt } : {}),
    ...(data.attempts !== undefined ? { attempts: data.attempts } : {}),
  })
);

export const otpIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const otpValidation = {
  create: createOTPSchema,
  update: updateOTPSchema,
  idParam: otpIdParamSchema,
  search: searchQuerySchema
};
