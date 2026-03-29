import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { OTP, OTPCreateDto, OTPUpdateDto } from '@/modules/users/entities/otp.entity';
import { IOTPRepository } from '@/modules/users/repositories/interfaces/otp.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class OTPRepository extends BaseRepository<OTP, OTPCreateDto, OTPUpdateDto> implements IOTPRepository {
  constructor() {
    super(prisma, 'OTP');
  }

  // Add custom repository methods here

}
