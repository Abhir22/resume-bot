
import { Education } from '@/modules/users/entities/education.entity';

export class EducationResponse {
  id?: string;
  createdAt?: Date;
  resumeId: string;
  school: string;
  degree: string;
  field?: string;
  startDate?: string;
  endDate?: string;

  constructor(education: Education) {
    if ('id' in education) this.id = education.id;
    if ('createdAt' in education) this.createdAt = education.createdAt;
    this.resumeId = education.resumeId;
    this.school = education.school;
    this.degree = education.degree;
    this.field = education.field || undefined;
    this.startDate = education.startDate || undefined;
    this.endDate = education.endDate || undefined;
  }
}
