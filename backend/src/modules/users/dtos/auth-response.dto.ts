
import { Auth } from '@/modules/users/entities/auth.entity';

export class AuthResponse {
  id?: string;
  createdAt?: Date;
  userId: string;
  github: boolean;
  gmail: boolean;
  email_otp: boolean;
  is_opted: boolean;

  constructor(auth: Auth) {
    if ('id' in auth) this.id = auth.id;
    if ('createdAt' in auth) this.createdAt = auth.createdAt;
    this.userId = auth.userId;
    this.github = auth.github;
    this.gmail = auth.gmail;
    this.email_otp = auth.email_otp;
    this.is_opted = auth.is_opted;
  }
}
