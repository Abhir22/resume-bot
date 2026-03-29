import { IRepository } from '@/core/interfaces/repository.interface';
import { Auth, AuthCreateDto, AuthUpdateDto } from '@/modules/users/entities/auth.entity';

export interface IAuthRepository extends IRepository<Auth, AuthCreateDto, AuthUpdateDto> {
  // Add custom repository methods here
}
