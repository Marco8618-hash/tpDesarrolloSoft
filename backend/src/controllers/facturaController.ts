import { Request, Response } from "express";

// GETALL - Listar todas las facturas (filtro opcional)
export const getAllFacturas = async (req: Request, res: Response) => {
    try {
        const { idreparacion } = req.query;
        // TODO: implementar con service, aplicar filtro
        res.status(200).json({ message: 'Listar facturas', filtros: { idreparacion } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener una factura por ID
export const getFacturaPorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Obtener factura con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
