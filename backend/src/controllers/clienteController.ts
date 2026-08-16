import { Request, Response } from "express";
import { clienteService } from "../services/clienteService";

// GETALL - Listar todos los clientes
export const getAllClientes = async (req: Request, res: Response) => {
    try {
        // TODO: implementar con service
        res.status(200).json({ message: 'Listar todos los clientes' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener un cliente por ID
export const getClientePorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        const cliente = await clienteService.getClientePorId(id);
        if (!cliente) {
            res.status(404).json({ message: 'No se encontró ningún cliente con ese ID' });
            return;
        }

        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Registrar un cliente persona
export const createClientePersona = async (req: Request, res: Response) => {
    try {
        const { cuit, nombre, apellido } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Cliente persona creado', data: { cuit, nombre, apellido } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Registrar un cliente empresa
export const createClienteEmpresa = async (req: Request, res: Response) => {
    try {
        const { cuit, razonSocial } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Cliente empresa creado', data: { cuit, razonSocial } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE - Actualizar datos de un cliente
export const updateCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        const datos = req.body;
        await clienteService.updateClientePorId(id, datos);
        res.status(200).json({ message: `Cliente con ID ${id} actualizado` });
    } catch (error: any) {
        if (error.message?.includes('no encontrado')) {
            res.status(404).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE - Eliminar un cliente
export const deleteCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Cliente con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};