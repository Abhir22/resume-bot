
import { Experience } from '@/modules/users/entities/experience.entity';

export class ExperienceResponse {
  id?: string;
  createdAt?: Date;
  resumeId: string;
  company: string;
  role: string;
  description?: any;
  startDate?: string;
  endDate?: string;

  constructor(experience: Experience) {
    if ('id' in experience) this.id = experience.id;
    if ('createdAt' in experience) this.createdAt = experience.createdAt;
    this.resumeId = experience.resumeId;
    this.company = experience.company;
    this.role = experience.role;
    this.description = experience.description || undefined;
    this.startDate = experience.startDate || undefined;
    this.endDate = experience.endDate || undefined;
  }
}
