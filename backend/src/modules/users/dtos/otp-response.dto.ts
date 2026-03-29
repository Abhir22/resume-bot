
import { OTP } from '@/modules/users/entities/otp.entity';

export class OTPResponse {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  email?: string;
  mobile?: string;
  code: string;
  expiresAt: Date;
  attempts: number;

  constructor(otp: OTP) {
    if ('id' in otp) this.id = otp.id;
    if ('createdAt' in otp) this.createdAt = otp.createdAt;
    if ('updatedAt' in otp) this.updatedAt = otp.updatedAt;
    this.email = otp.email || undefined;
    this.mobile = otp.mobile || undefined;
    this.code = otp.code;
    this.expiresAt = otp.expiresAt;
    this.attempts = otp.attempts;
  }
}
