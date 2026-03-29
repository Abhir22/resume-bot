import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IEducationService } from '@/modules/users/services/interfaces/education.service.interface';
import { Education, EducationCreateDto, EducationUpdateDto } from '@/modules/users/entities/education.entity';
import { EducationResponse } from '../dtos/education-response.dto';
import { educationValidation } from '@/modules/users/validations/education.validation';

@injectable()
export class EducationController extends BaseController<Education, EducationCreateDto, EducationUpdateDto> {
  constructor(
    @inject('IEducationService') private educationService: IEducationService
  ) {
    super({
      service: educationService,
      responseClass: EducationResponse,
      createSchema: educationValidation.create,
      updateSchema: educationValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
