import { IService } from '@/core/interfaces/service.interface';
import { Project, ProjectCreateDto, ProjectUpdateDto } from '@/modules/users/entities/project.entity';

export interface IProjectService extends IService<Project, ProjectCreateDto, ProjectUpdateDto> {
  // Add custom service methods here
}
