import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IExperienceService } from '@/modules/users/services/interfaces/experience.service.interface';
import { Experience, ExperienceCreateDto, ExperienceUpdateDto } from '@/modules/users/entities/experience.entity';
import { ExperienceResponse } from '../dtos/experience-response.dto';
import { experienceValidation } from '@/modules/users/validations/experience.validation';

@injectable()
export class ExperienceController extends BaseController<Experience, ExperienceCreateDto, ExperienceUpdateDto> {
  constructor(
    @inject('IExperienceService') private experienceService: IExperienceService
  ) {
    super({
      service: experienceService,
      responseClass: ExperienceResponse,
      createSchema: experienceValidation.create,
      updateSchema: experienceValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
