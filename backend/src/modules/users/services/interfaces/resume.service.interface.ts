import { IService } from '@/core/interfaces/service.interface';
import { Resume, ResumeCreateDto, ResumeUpdateDto } from '@/modules/users/entities/resume.entity';

export interface IResumeService extends IService<Resume, ResumeCreateDto, ResumeUpdateDto> {
  // Add custom service methods here
}
