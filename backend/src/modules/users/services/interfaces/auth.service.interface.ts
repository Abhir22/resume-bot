import { IService } from '@/core/interfaces/service.interface';
import { Auth, AuthCreateDto, AuthUpdateDto } from '@/modules/users/entities/auth.entity';

export interface IAuthService extends IService<Auth, AuthCreateDto, AuthUpdateDto> {
  // Add custom service methods here
}
