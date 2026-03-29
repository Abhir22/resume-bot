import { IService } from '@/core/interfaces/service.interface';
import { Experience, ExperienceCreateDto, ExperienceUpdateDto } from '@/modules/users/entities/experience.entity';

export interface IExperienceService extends IService<Experience, ExperienceCreateDto, ExperienceUpdateDto> {
  // Add custom service methods here
}
