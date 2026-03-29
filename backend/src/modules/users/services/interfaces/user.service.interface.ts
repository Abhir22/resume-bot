import { IService } from '@/core/interfaces/service.interface';
import { User, UserCreateDto, UserUpdateDto } from '@/modules/users/entities/user.entity';

export interface IUserService extends IService<User, UserCreateDto, UserUpdateDto> {
  // Add custom service methods here
}
