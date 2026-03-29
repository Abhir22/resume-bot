import { IRepository } from '@/core/interfaces/repository.interface';
import { Experience, ExperienceCreateDto, ExperienceUpdateDto } from '@/modules/users/entities/experience.entity';

export interface IExperienceRepository extends IRepository<Experience, ExperienceCreateDto, ExperienceUpdateDto> {
  // Add custom repository methods here
}
