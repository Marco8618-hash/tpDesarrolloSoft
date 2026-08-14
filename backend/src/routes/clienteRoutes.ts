import { Router } from 'express';
import { getClientePorId } from '../controllers/clienteController';

const router = Router();

// GETONE cliente por id
router.get('/:id', getClientePorId);

// FINDALL clientes
router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Aquí se devolverían todos los clientes' });
});


export default router;