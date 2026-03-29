import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IOTPService } from '@/modules/users/services/interfaces/otp.service.interface';
import { OTP, OTPCreateDto, OTPUpdateDto } from '@/modules/users/entities/otp.entity';
import { OTPResponse } from '../dtos/otp-response.dto';
import { otpValidation } from '@/modules/users/validations/otp.validation';

@injectable()
export class OTPController extends BaseController<OTP, OTPCreateDto, OTPUpdateDto> {
  constructor(
    @inject('IOTPService') private otpService: IOTPService
  ) {
    super({
      service: otpService,
      responseClass: OTPResponse,
      createSchema: otpValidation.create,
      updateSchema: otpValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
