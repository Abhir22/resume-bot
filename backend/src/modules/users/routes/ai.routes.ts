import { Router } from 'express';
import { container } from 'tsyringe';
import { AiController } from '../controllers/ai.controller';
import { createUploadMiddleware } from '@/config/multer.config';

const router = Router();
const aiController = container.resolve(AiController);
const uploadResume = createUploadMiddleware('document');

router.post('/ai/evaluate-resume', uploadResume.single('resume'), aiController.evaluateResume);

export default router;
