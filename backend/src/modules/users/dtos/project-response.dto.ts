
import { Project } from '@/modules/users/entities/project.entity';

export class ProjectResponse {
  id?: string;
  createdAt?: Date;
  resumeId: string;
  title: string;
  description?: any;
  techStack?: string;

  constructor(project: Project) {
    if ('id' in project) this.id = project.id;
    if ('createdAt' in project) this.createdAt = project.createdAt;
    this.resumeId = project.resumeId;
    this.title = project.title;
    this.description = project.description || undefined;
    this.techStack = project.techStack || undefined;
  }
}
