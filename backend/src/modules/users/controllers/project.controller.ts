import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IProjectService } from '@/modules/users/services/interfaces/project.service.interface';
import { Project, ProjectCreateDto, ProjectUpdateDto } from '@/modules/users/entities/project.entity';
import { ProjectResponse } from '../dtos/project-response.dto';
import { projectValidation } from '@/modules/users/validations/project.validation';

@injectable()
export class ProjectController extends BaseController<Project, ProjectCreateDto, ProjectUpdateDto> {
  constructor(
    @inject('IProjectService') private projectService: IProjectService
  ) {
    super({
      service: projectService,
      responseClass: ProjectResponse,
      createSchema: projectValidation.create,
      updateSchema: projectValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
