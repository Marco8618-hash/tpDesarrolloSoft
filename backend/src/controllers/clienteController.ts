import { Request, Response } from "express";
import { clienteService } from "../services/clienteService";


export const getClientePorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        const cliente = await clienteService.getClientePorId(id);
        if (!cliente) {
            res.status(404).json({ message: 'No se encontro ningun cliente con ese ID' });
            return;
        }

        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};