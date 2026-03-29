import { BaseRepository } from '@/core/base/base.repository';
import { prisma } from '@/loaders/prisma';
import { User, UserCreateDto, UserUpdateDto } from '@/modules/users/entities/user.entity';
import { IUserRepository } from '@/modules/users/repositories/interfaces/user.repository.interface';
import { Repository } from '@/core/decorators/repository.decorator';

@Repository()
export class UserRepository extends BaseRepository<User, UserCreateDto, UserUpdateDto> implements IUserRepository {
  constructor() {
    super(prisma, 'User');
  }

  // Add custom repository methods here

}
