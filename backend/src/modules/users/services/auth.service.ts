import { inject, injectable } from 'tsyringe';
import { Auth, AuthCreateDto, AuthUpdateDto } from '@/modules/users/entities/auth.entity';
import { BaseService } from '@/core/base/base.service';
import { IAuthService } from '@/modules/users/services/interfaces/auth.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class AuthService extends BaseService<Auth, AuthCreateDto, AuthUpdateDto> implements IAuthService {
  constructor(
    @inject('IAuthRepository') repository: any
  ) {
    super(repository);
  }
}
