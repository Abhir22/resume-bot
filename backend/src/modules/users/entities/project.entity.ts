import { Prisma } from '@prisma/client';

export type Project = Prisma.ProjectGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type ProjectCreateDto = Prisma.ProjectCreateInput;
export type ProjectUpdateDto = Prisma.ProjectUpdateInput;
