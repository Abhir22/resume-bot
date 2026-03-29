import { Prisma } from '@prisma/client';

export type Auth = Prisma.AuthGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type AuthCreateDto = Prisma.AuthCreateInput;
export type AuthUpdateDto = Prisma.AuthUpdateInput;
