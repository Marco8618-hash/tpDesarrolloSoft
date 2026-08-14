import { Router } from 'express';
import {
    getAllReparaciones, getReparacionPorId, createReparacion, updateReparacion, deleteReparacion,
    aceptarReparacion, rechazarReparacion, finalizarReparacion,
    getItemsDeReparacion, addItemAReparacion, updateItemDeReparacion, deleteItemDeReparacion,
    getTotalDeReparacion, emitirFacturaDeReparacion
} from '../controllers/reparacionController';

const router = Router();

// CRUD básico
router.get('/', getAllReparaciones);
router.get('/:id', getReparacionPorId);
router.post('/', createReparacion);
router.put('/:id', updateReparacion);
router.delete('/:id', deleteReparacion);

// Cambios de estado
router.patch('/:id/aceptar', aceptarReparacion);
router.patch('/:id/rechazar', rechazarReparacion);
router.patch('/:id/finalizar', finalizarReparacion);

// Items insumo
router.get('/:id/items', getItemsDeReparacion);
router.post('/:id/items', addItemAReparacion);
router.put('/:id/items/:idItem', updateItemDeReparacion);
router.delete('/:id/items/:idItem', deleteItemDeReparacion);

// Total
router.get('/:id/total', getTotalDeReparacion);

// Factura
router.post('/:id/factura', emitirFacturaDeReparacion);

export default router;