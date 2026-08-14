import { Router } from 'express';
import { getAllTecnicos, getTecnicoPorId, createTecnico, updateTecnico, deleteTecnico } from '../controllers/tecnicoController';

const router = Router();

router.get('/', getAllTecnicos);
router.get('/:id', getTecnicoPorId);
router.post('/', createTecnico);
router.put('/:id', updateTecnico);
router.delete('/:id', deleteTecnico);

export default router;