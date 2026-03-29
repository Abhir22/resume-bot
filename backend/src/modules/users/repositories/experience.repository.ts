import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { Experience, ExperienceCreateDto, ExperienceUpdateDto } from '@/modules/users/entities/experience.entity';
import { IExperienceRepository } from '@/modules/users/repositories/interfaces/experience.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class ExperienceRepository extends BaseRepository<Experience, ExperienceCreateDto, ExperienceUpdateDto> implements IExperienceRepository {
  constructor() {
    super(prisma, 'Experience');
  }

  // Add custom repository methods here

}
