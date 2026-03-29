import { inject, injectable } from 'tsyringe';
import { Experience, ExperienceCreateDto, ExperienceUpdateDto } from '@/modules/users/entities/experience.entity';
import { BaseService } from '@/core/base/base.service';
import { IExperienceService } from '@/modules/users/services/interfaces/experience.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class ExperienceService extends BaseService<Experience, ExperienceCreateDto, ExperienceUpdateDto> implements IExperienceService {
  constructor(
    @inject('IExperienceRepository') repository: any
  ) {
    super(repository);
  }
}
