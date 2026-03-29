import { Prisma } from '@prisma/client';

export type OTP = Prisma.OTPGetPayload<{
  // include: {
  //   // Add related models here if needed
  // }
}>;

export type OTPCreateDto = Prisma.OTPCreateInput;
export type OTPUpdateDto = Prisma.OTPUpdateInput;
