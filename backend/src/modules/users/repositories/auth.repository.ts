import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { Auth, AuthCreateDto, AuthUpdateDto } from '@/modules/users/entities/auth.entity';
import { IAuthRepository } from '@/modules/users/repositories/interfaces/auth.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class AuthRepository extends BaseRepository<Auth, AuthCreateDto, AuthUpdateDto> implements IAuthRepository {
  constructor() {
    super(prisma, 'Auth');
  }

  // Add custom repository methods here

}
