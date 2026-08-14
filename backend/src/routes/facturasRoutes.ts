import { Router } from 'express';
import { getAllFacturas, getFacturaPorId } from '../controllers/facturaController';

const router = Router();

router.get('/', getAllFacturas);
router.get('/:id', getFacturaPorId);

export default router;