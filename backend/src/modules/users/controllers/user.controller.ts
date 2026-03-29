import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IUserService } from '@/modules/users/services/interfaces/user.service.interface';
import { User, UserCreateDto, UserUpdateDto } from '@/modules/users/entities/user.entity';
import { UserResponse } from '../dtos/user-response.dto';
import { userValidation } from '@/modules/users/validations/user.validation';

@injectable()
export class UserController extends BaseController<User, UserCreateDto, UserUpdateDto> {
  constructor(
    @inject('IUserService') private userService: IUserService
  ) {
    super({
      service: userService,
      responseClass: UserResponse,
      createSchema: userValidation.create,
      updateSchema: userValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
