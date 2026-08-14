import { Request, Response } from "express";

// GETALL - Listar ubicaciones
export const getAllUbicaciones = async (req: Request, res: Response) => {
    try {
        // TODO: implementar con service
        res.status(200).json({ message: 'Listar todas las ubicaciones' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener una ubicación por ID
export const getUbicacionPorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Obtener ubicación con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Crear una ubicación
export const createUbicacion = async (req: Request, res: Response) => {
    try {
        const { provincia, localidad, calle, altura } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Ubicación creada', data: { provincia, localidad, calle, altura } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE - Actualizar una ubicación
export const updateUbicacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Ubicación con ID ${id} actualizada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE - Eliminar una ubicación
export const deleteUbicacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Ubicación con ID ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
