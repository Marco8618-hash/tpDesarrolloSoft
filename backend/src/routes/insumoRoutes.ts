import { Router } from 'express';
import { getAllInsumos, getInsumoPorId, createInsumo, updateInsumo, deleteInsumo } from '../controllers/insumoController';

const router = Router();

router.get('/', getAllInsumos);
router.get('/:id', getInsumoPorId);
router.post('/', createInsumo);
router.put('/:id', updateInsumo);
router.delete('/:id', deleteInsumo);

export default router;
