import { inject, injectable } from 'tsyringe';
import { Education, EducationCreateDto, EducationUpdateDto } from '@/modules/users/entities/education.entity';
import { BaseService } from '@/core/base/base.service';
import { IEducationService } from '@/modules/users/services/interfaces/education.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class EducationService extends BaseService<Education, EducationCreateDto, EducationUpdateDto> implements IEducationService {
  constructor(
    @inject('IEducationRepository') repository: any
  ) {
    super(repository);
  }
}
