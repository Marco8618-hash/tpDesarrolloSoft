import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();

// LOGIN - Autenticación y obtención de token JWT
router.post('/login', login);

export default router;