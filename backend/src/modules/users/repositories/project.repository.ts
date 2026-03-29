import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { Project, ProjectCreateDto, ProjectUpdateDto } from '@/modules/users/entities/project.entity';
import { IProjectRepository } from '@/modules/users/repositories/interfaces/project.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class ProjectRepository extends BaseRepository<Project, ProjectCreateDto, ProjectUpdateDto> implements IProjectRepository {
  constructor() {
    super(prisma, 'Project');
  }

  // Add custom repository methods here

}
