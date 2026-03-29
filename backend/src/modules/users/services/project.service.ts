import { inject, injectable } from 'tsyringe';
import { Project, ProjectCreateDto, ProjectUpdateDto } from '@/modules/users/entities/project.entity';
import { BaseService } from '@/core/base/base.service';
import { IProjectService } from '@/modules/users/services/interfaces/project.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class ProjectService extends BaseService<Project, ProjectCreateDto, ProjectUpdateDto> implements IProjectService {
  constructor(
    @inject('IProjectRepository') repository: any
  ) {
    super(repository);
  }
}
