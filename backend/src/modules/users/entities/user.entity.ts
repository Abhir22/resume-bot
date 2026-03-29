import { Prisma } from '@prisma/client';

export type User = Prisma.UserGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type UserCreateDto = Prisma.UserCreateInput;
export type UserUpdateDto = Prisma.UserUpdateInput;
