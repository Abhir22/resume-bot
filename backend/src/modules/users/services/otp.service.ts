import { inject, injectable } from 'tsyringe';
import { OTP, OTPCreateDto, OTPUpdateDto } from '@/modules/users/entities/otp.entity';
import { BaseService } from '@/core/base/base.service';
import { IOTPService } from '@/modules/users/services/interfaces/otp.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class OTPService extends BaseService<OTP, OTPCreateDto, OTPUpdateDto> implements IOTPService {
  constructor(
    @inject('IOTPRepository') repository: any
  ) {
    super(repository);
  }
}
