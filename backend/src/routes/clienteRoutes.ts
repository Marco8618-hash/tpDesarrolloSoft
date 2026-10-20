import { Router } from 'express';
import {
    getAllClientes,
    getAllPersonas,
    getAllEmpresas,
    getClientePorId,
    getPerfil,
    createClientePersona,
    createClienteEmpresa,
    updateClientePersona,
    updateClienteEmpresa,
    updateCliente,
    deleteCliente
} from '../controllers/clienteController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Creación / Alta / Registro (Público)
router.post('/persona', createClientePersona);
router.post('/empresa', createClienteEmpresa);

// Perfil del cliente autenticado (Protegido por token)
router.get('/perfil', authMiddleware, getPerfil);

// Consultas protegidas por token
// Nota: /perfil, /personas y /empresas van antes de /:id para evitar capturarse como param :id
router.get('/', authMiddleware, getAllClientes);
router.get('/personas', authMiddleware, getAllPersonas);
router.get('/empresas', authMiddleware, getAllEmpresas);
router.get('/:id', authMiddleware, getClientePorId);

// Actualizaciones protegidas por token
router.put('/persona/:id', authMiddleware, updateClientePersona);
router.put('/empresa/:id', authMiddleware, updateClienteEmpresa);
router.put('/:id', authMiddleware, updateCliente);

// Baja lógica protegida por token
router.delete('/:id', authMiddleware, deleteCliente);

export default router;