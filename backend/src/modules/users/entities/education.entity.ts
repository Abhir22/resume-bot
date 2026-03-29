import { Prisma } from '@prisma/client';

export type Education = Prisma.EducationGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type EducationCreateDto = Prisma.EducationCreateInput;
export type EducationUpdateDto = Prisma.EducationUpdateInput;
