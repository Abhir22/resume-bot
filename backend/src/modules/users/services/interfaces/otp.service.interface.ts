import { IService } from '@/core/interfaces/service.interface';
import { OTP, OTPCreateDto, OTPUpdateDto } from '@/modules/users/entities/otp.entity';

export interface IOTPService extends IService<OTP, OTPCreateDto, OTPUpdateDto> {
  // Add custom service methods here
}
