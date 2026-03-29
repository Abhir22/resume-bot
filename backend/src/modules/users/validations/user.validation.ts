import { z } from 'zod';
import { flatToNestedSchema } from '@/core/utils/flat-to-nested-schema';

export const createUserSchema = flatToNestedSchema(
  z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
  mobile: z.string(),
  avatar: z.any(),
  githubId: z.string(),
  googleId: z.string(),
  emailVerified: z.boolean(),
  mobileVerified: z.boolean(),
  isActive: z.boolean(),
  lastLoginAt: z.any(),
  }),
  data => ({
    email: data.email,
    name: data.name,
    password: data.password,
    mobile: data.mobile,
    avatar: data.avatar,
    githubId: data.githubId,
    googleId: data.googleId,
    emailVerified: data.emailVerified,
    mobileVerified: data.mobileVerified,
    isActive: data.isActive,
    lastLoginAt: data.lastLoginAt,
  })
);

export const updateUserSchema = flatToNestedSchema(
  z.object({
    email: z.string().optional(),
    name: z.string().optional(),
    password: z.string().optional(),
    mobile: z.string().optional(),
    avatar: z.any().optional(),
    githubId: z.string().optional(),
    googleId: z.string().optional(),
    emailVerified: z.boolean().optional(),
    mobileVerified: z.boolean().optional(),
    isActive: z.boolean().optional(),
    lastLoginAt: z.any().optional(),
  }),
  data => ({
    ...(data.email !== undefined ? { email: data.email } : {}),
    ...(data.name !== undefined ? { name: data.name } : {}),
    ...(data.password !== undefined ? { password: data.password } : {}),
    ...(data.mobile !== undefined ? { mobile: data.mobile } : {}),
    ...(data.avatar !== undefined ? { avatar: data.avatar } : {}),
    ...(data.githubId !== undefined ? { githubId: data.githubId } : {}),
    ...(data.googleId !== undefined ? { googleId: data.googleId } : {}),
    ...(data.emailVerified !== undefined ? { emailVerified: data.emailVerified } : {}),
    ...(data.mobileVerified !== undefined ? { mobileVerified: data.mobileVerified } : {}),
    ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
    ...(data.lastLoginAt !== undefined ? { lastLoginAt: data.lastLoginAt } : {}),
  })
);

export const userIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const searchQuerySchema = z.object({
  q: z.string().min(3),
});

export const userValidation = {
  create: createUserSchema,
  update: updateUserSchema,
  idParam: userIdParamSchema,
  search: searchQuerySchema
};
