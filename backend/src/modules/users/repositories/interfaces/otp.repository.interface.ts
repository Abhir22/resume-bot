import { IRepository } from '@/core/interfaces/repository.interface';
import { OTP, OTPCreateDto, OTPUpdateDto } from '@/modules/users/entities/otp.entity';

export interface IOTPRepository extends IRepository<OTP, OTPCreateDto, OTPUpdateDto> {
  // Add custom repository methods here
}
