import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { Resume, ResumeCreateDto, ResumeUpdateDto } from '@/modules/users/entities/resume.entity';
import { IResumeRepository } from '@/modules/users/repositories/interfaces/resume.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class ResumeRepository extends BaseRepository<Resume, ResumeCreateDto, ResumeUpdateDto> implements IResumeRepository {
  constructor() {
    super(prisma, 'Resume');
  }

  // Add custom repository methods here

}
