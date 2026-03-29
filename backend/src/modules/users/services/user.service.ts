import { inject, injectable } from 'tsyringe';
import { User, UserCreateDto, UserUpdateDto } from '@/modules/users/entities/user.entity';
import { BaseService } from '@/core/base/base.service';
import { IUserService } from '@/modules/users/services/interfaces/user.service.interface';
import { NotFoundException, BadRequestException } from '@/core/exceptions/http.exception';

@injectable()
export class UserService extends BaseService<User, UserCreateDto, UserUpdateDto> implements IUserService {
  constructor(
    @inject('IUserRepository') repository: any
  ) {
    super(repository);
  }
}
