import { container } from 'tsyringe';

import { AiService } from './services/ai.services';
import { IAiService } from './services/interface/ai.service.interface';

export const registerDependencies = () => {

  container.register<IAiService>('IAiService', { useClass: AiService });
  console.log('All module dependencies registered');
};

export const clearDependencies = () => {
  container.reset();
};
