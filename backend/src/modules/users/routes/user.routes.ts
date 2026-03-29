import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { container } from 'tsyringe';

const router = Router();
const userController = container.resolve(UserController);

router.get('/user/', userController.findWithPagination);
router.get('/user/search', userController.search);
router.get('/user/:id', userController.getById);
router.post('/user/', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

export default router;
