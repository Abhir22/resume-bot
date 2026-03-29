import { IService } from '@/core/interfaces/service.interface';
import { Education, EducationCreateDto, EducationUpdateDto } from '@/modules/users/entities/education.entity';

export interface IEducationService extends IService<Education, EducationCreateDto, EducationUpdateDto> {
  // Add custom service methods here
}
