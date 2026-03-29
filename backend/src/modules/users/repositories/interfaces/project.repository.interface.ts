import { IRepository } from '@/core/interfaces/repository.interface';
import { Project, ProjectCreateDto, ProjectUpdateDto } from '@/modules/users/entities/project.entity';

export interface IProjectRepository extends IRepository<Project, ProjectCreateDto, ProjectUpdateDto> {
  // Add custom repository methods here
}
