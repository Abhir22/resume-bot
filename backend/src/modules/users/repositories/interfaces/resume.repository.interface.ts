import { IRepository } from '@/core/interfaces/repository.interface';
import { Resume, ResumeCreateDto, ResumeUpdateDto } from '@/modules/users/entities/resume.entity';

export interface IResumeRepository extends IRepository<Resume, ResumeCreateDto, ResumeUpdateDto> {
  // Add custom repository methods here
}
