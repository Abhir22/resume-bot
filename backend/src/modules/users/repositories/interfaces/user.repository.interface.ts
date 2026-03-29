import { IRepository } from '@/core/interfaces/repository.interface';
import { User, UserCreateDto, UserUpdateDto } from '@/modules/users/entities/user.entity';

export interface IUserRepository extends IRepository<User, UserCreateDto, UserUpdateDto> {
  // Add custom repository methods here
}
