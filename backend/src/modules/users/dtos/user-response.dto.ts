
import { User } from '@/modules/users/entities/user.entity';

export class UserResponse {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  email: string;
  name?: string;
  password?: string;
  mobile?: string;
  avatar?: any;
  githubId?: string;
  googleId?: string;
  emailVerified: boolean;
  mobileVerified: boolean;
  isActive: boolean;
  lastLoginAt?: Date;

  constructor(user: User) {
    if ('id' in user) this.id = user.id;
    if ('createdAt' in user) this.createdAt = user.createdAt;
    if ('updatedAt' in user) this.updatedAt = user.updatedAt;
    this.email = user.email;
    this.name = user.name || undefined;
    this.password = user.password || undefined;
    this.mobile = user.mobile || undefined;
    this.avatar = user.avatar || undefined;
    this.githubId = user.githubId || undefined;
    this.googleId = user.googleId || undefined;
    this.emailVerified = user.emailVerified;
    this.mobileVerified = user.mobileVerified;
    this.isActive = user.isActive;
    this.lastLoginAt = user.lastLoginAt || undefined;
  }
}
