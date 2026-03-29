import { IRepository } from '@/core/interfaces/repository.interface';
import { Education, EducationCreateDto, EducationUpdateDto } from '@/modules/users/entities/education.entity';

export interface IEducationRepository extends IRepository<Education, EducationCreateDto, EducationUpdateDto> {
  // Add custom repository methods here
}
