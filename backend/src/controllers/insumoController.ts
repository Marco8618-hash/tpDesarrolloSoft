import { Request, Response } from "express";

// GETALL - Listar todos los insumos
export const getAllInsumos = async (req: Request, res: Response) => {
    try {
        // TODO: implementar con service
        res.status(200).json({ message: 'Listar todos los insumos' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener un insumo por ID
export const getInsumoPorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Obtener insumo con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Crear un insumo (admin)
export const createInsumo = async (req: Request, res: Response) => {
    try {
        const { nombre, costo } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Insumo creado', data: { nombre, costo } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE - Actualizar un insumo (nombre, costo)
export const updateInsumo = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Insumo con ID ${id} actualizado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE - Eliminar un insumo
export const deleteInsumo = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Insumo con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
