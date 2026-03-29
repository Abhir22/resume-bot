
import { Resume } from '@/modules/users/entities/resume.entity';

export class ResumeResponse {
  id?: string;
  createdAt?: Date;
  userId: string;
  filename: string;
  feedback?: any;
  dataKeep: boolean;

  constructor(resume: Resume) {
    if ('id' in resume) this.id = resume.id;
    if ('createdAt' in resume) this.createdAt = resume.createdAt;
    this.userId = resume.userId;
    this.filename = resume.filename;
    this.feedback = resume.feedback || undefined;
    this.dataKeep = resume.dataKeep;
  }
}
