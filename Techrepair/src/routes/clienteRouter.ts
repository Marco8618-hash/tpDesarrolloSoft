import { Router, Request, Response } from 'express';
import { ClienteService } from '../services/clienteService';

const router = Router();
const clienteService = new ClienteService();

// GETONE cliente por cuit
router.get('/:cuit', async (req: Request, res: Response) => {
  const cuit = req.params.cuit as string;;
  const cliente = await clienteService.getClientePorCuit(cuit);

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