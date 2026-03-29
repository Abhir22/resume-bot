import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { Education, EducationCreateDto, EducationUpdateDto } from '@/modules/users/entities/education.entity';
import { IEducationRepository } from '@/modules/users/repositories/interfaces/education.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class EducationRepository extends BaseRepository<Education, EducationCreateDto, EducationUpdateDto> implements IEducationRepository {
  constructor() {
    super(prisma, 'Education');
  }

  // Add custom repository methods here

}
