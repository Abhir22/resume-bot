import { Prisma } from '@prisma/client';

export type Resume = Prisma.ResumeGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type ResumeCreateDto = Prisma.ResumeCreateInput;
export type ResumeUpdateDto = Prisma.ResumeUpdateInput;
