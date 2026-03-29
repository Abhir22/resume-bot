import { Router } from 'express';
import { EducationController } from '../controllers/education.controller';
import { container } from 'tsyringe';

const router = Router();
const educationController = container.resolve(EducationController);

router.get('/education/', educationController.findWithPagination);
router.get('/education/search', educationController.search);
router.get('/education/:id', educationController.getById);
router.post('/education/', educationController.create);
router.put('/education/:id', educationController.update);
router.delete('/education/:id', educationController.delete);

export default router;
