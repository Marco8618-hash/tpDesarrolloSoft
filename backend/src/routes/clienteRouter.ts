import { Router, Request, Response } from 'express';
import { ClienteService } from '../services/clienteService';

const router = Router();
const clienteService = new ClienteService();

// GETONE cliente por id
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const cliente = await clienteService.getClientePorId(id);

  if (!cliente) {
    res.status(404).json({ message: 'Cliente no encontrado' });
    return;
  }

  res.status(200).json(cliente);
});

// FINDALL clientes
router.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Aquí se devolverían todos los clientes' });
});


export default router;