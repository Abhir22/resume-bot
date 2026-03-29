import { Router } from 'express';
import { ResumeController } from '../controllers/resume.controller';
import { container } from 'tsyringe';

const router = Router();
const resumeController = container.resolve(ResumeController);

router.get('/resume/', resumeController.findWithPagination);
router.get('/resume/search', resumeController.search);
router.get('/resume/:id', resumeController.getById);
router.post('/resume/', resumeController.create);
router.put('/resume/:id', resumeController.update);
router.delete('/resume/:id', resumeController.delete);

export default router;
