import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller';
import { container } from 'tsyringe';

const router = Router();
const projectController = container.resolve(ProjectController);

router.get('/project/', projectController.findWithPagination);
router.get('/project/search', projectController.search);
router.get('/project/:id', projectController.getById);
router.post('/project/', projectController.create);
router.put('/project/:id', projectController.update);
router.delete('/project/:id', projectController.delete);

export default router;
