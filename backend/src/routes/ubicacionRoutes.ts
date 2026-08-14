import { Router } from 'express';
import { getAllUbicaciones, getUbicacionPorId, createUbicacion, updateUbicacion, deleteUbicacion } from '../controllers/ubicacionController';

const router = Router();

router.get('/', getAllUbicaciones);
router.get('/:id', getUbicacionPorId);
router.post('/', createUbicacion);
router.put('/:id', updateUbicacion);
router.delete('/:id', deleteUbicacion);

export default router;
