import { Router } from 'express';
import { OTPController } from '../controllers/otp.controller';
import { container } from 'tsyringe';

const router = Router();
const otpController = container.resolve(OTPController);

router.get('/otp/', otpController.findWithPagination);
router.get('/otp/search', otpController.search);
router.get('/otp/:id', otpController.getById);
router.post('/otp/', otpController.create);
router.put('/otp/:id', otpController.update);
router.delete('/otp/:id', otpController.delete);

export default router;
