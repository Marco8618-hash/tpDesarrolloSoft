import { Router } from 'express';
import { getAllClientes, getClientePorId, createClientePersona, createClienteEmpresa, updateCliente, deleteCliente } from '../controllers/clienteController';

const router = Router();

router.get('/', getAllClientes);
router.get('/:id', getClientePorId);
router.post('/persona', createClientePersona);
router.post('/empresa', createClienteEmpresa);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

export default router;