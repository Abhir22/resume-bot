import { inject, injectable } from 'tsyringe';
import { Resume, ResumeCreateDto, ResumeUpdateDto } from '@/modules/users/entities/resume.entity';
import { BaseService } from '@/core/base/base.service';
import { IResumeService } from '@/modules/users/services/interfaces/resume.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class ResumeService extends BaseService<Resume, ResumeCreateDto, ResumeUpdateDto> implements IResumeService {
  constructor(
    @inject('IResumeRepository') repository: any
  ) {
    super(repository);
  }
}
