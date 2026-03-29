import { Prisma } from '@prisma/client';

export type Experience = Prisma.ExperienceGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type ExperienceCreateDto = Prisma.ExperienceCreateInput;
export type ExperienceUpdateDto = Prisma.ExperienceUpdateInput;
