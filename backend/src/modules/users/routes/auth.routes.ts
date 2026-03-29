import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { container } from 'tsyringe';

const router = Router();
const authController = container.resolve(AuthController);

router.get('/auth/', authController.findWithPagination);
router.get('/auth/search', authController.search);
router.get('/auth/:id', authController.getById);
router.post('/auth/', authController.create);
router.put('/auth/:id', authController.update);
router.delete('/auth/:id', authController.delete);

export default router;
