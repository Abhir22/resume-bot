import { inject, injectable } from 'tsyringe';
import { BaseController } from '@/core/base/base.controller';
import { IAuthService } from '@/modules/users/services/interfaces/auth.service.interface';
import { Auth, AuthCreateDto, AuthUpdateDto } from '@/modules/users/entities/auth.entity';
import { AuthResponse } from '../dtos/auth-response.dto';
import { authValidation } from '@/modules/users/validations/auth.validation';

@injectable()
export class AuthController extends BaseController<Auth, AuthCreateDto, AuthUpdateDto> {
  constructor(
    @inject('IAuthService') private authService: IAuthService
  ) {
    super({
      service: authService,
      responseClass: AuthResponse,
      createSchema: authValidation.create,
      updateSchema: authValidation.update,
      searchFields: ['id'], // Add default search fields, can be customized
      defaultInclude: {}, // Add default include, can be customized
    });
  }
}
