import { Request, Response } from "express";

// GETALL - Listar todos los técnicos
export const getAllTecnicos = async (req: Request, res: Response) => {
    try {
        // TODO: implementar con service
        res.status(200).json({ message: 'Listar todos los técnicos' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener un técnico por ID
export const getTecnicoPorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Obtener técnico con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Registrar un técnico (solo admin)
export const createTecnico = async (req: Request, res: Response) => {
    try {
        const { cuit, nombre, apellido, idubicacion } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Técnico creado', data: { cuit, nombre, apellido, idubicacion } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE - Actualizar datos de un técnico
export const updateTecnico = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Técnico con ID ${id} actualizado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE - Eliminar un técnico
export const deleteTecnico = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Técnico con ID ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
