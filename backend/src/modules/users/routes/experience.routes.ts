import { Router } from 'express';
import { ExperienceController } from '../controllers/experience.controller';
import { container } from 'tsyringe';

const router = Router();
const experienceController = container.resolve(ExperienceController);

router.get('/experience/', experienceController.findWithPagination);
router.get('/experience/search', experienceController.search);
router.get('/experience/:id', experienceController.getById);
router.post('/experience/', experienceController.create);
router.put('/experience/:id', experienceController.update);
router.delete('/experience/:id', experienceController.delete);

export default router;
