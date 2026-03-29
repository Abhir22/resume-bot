import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IResumeService } from '@/modules/users/services/interfaces/resume.service.interface';
import { Resume, ResumeCreateDto, ResumeUpdateDto } from '@/modules/users/entities/resume.entity';
import { ResumeResponse } from '../dtos/resume-response.dto';
import { resumeValidation } from '@/modules/users/validations/resume.validation';

@injectable()
export class ResumeController extends BaseController<Resume, ResumeCreateDto, ResumeUpdateDto> {
  constructor(
    @inject('IResumeService') private resumeService: IResumeService
  ) {
    super({
      service: resumeService,
      responseClass: ResumeResponse,
      createSchema: resumeValidation.create,
      updateSchema: resumeValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
