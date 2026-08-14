import { Request, Response } from "express";

// ============================================
// CRUD BASICO
// ============================================

// GETALL - Listar reparaciones (con filtros opcionales)
export const getAllReparaciones = async (req: Request, res: Response) => {
    try {
        const { estado, idcliente, idtecnico } = req.query;
        // TODO: implementar con service, aplicar filtros
        res.status(200).json({ message: 'Listar reparaciones', filtros: { estado, idcliente, idtecnico } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// GETONE - Obtener detalle de una reparación
export const getReparacionPorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Obtener reparación con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE - Crear nueva reparación (estado inicial = "pendiente")
export const createReparacion = async (req: Request, res: Response) => {
    try {
        const { descripcion, idcliente, idubicacion } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: 'Reparación creada', data: { descripcion, idcliente, idubicacion } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE - Actualizar datos generales de una reparación
export const updateReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Reparación con ID ${id} actualizada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE - Eliminar/cancelar una reparación
export const deleteReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Reparación con ID ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// ============================================
// CAMBIOS DE ESTADO
// ============================================

// ACEPTAR - Técnico acepta la reparación (pendiente -> en proceso)
export const aceptarReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service - validar que esté en estado "pendiente", asignar técnico
        res.status(200).json({ message: `Reparación con ID ${id} aceptada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// RECHAZAR - Técnico rechaza la reparación (pendiente -> rechazada)
export const rechazarReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        const { motivo } = req.body;
        if (!motivo) {
            res.status(400).json({ message: 'Debe proporcionar un motivo de rechazo' });
            return;
        }
        // TODO: implementar con service - validar estado, notificar al cliente
        res.status(200).json({ message: `Reparación con ID ${id} rechazada`, motivo });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// FINALIZAR - Técnico da por finalizada la reparación (en proceso -> finalizada)
export const finalizarReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service - validar que esté "en proceso"
        res.status(200).json({ message: `Reparación con ID ${id} finalizada` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// ============================================
// ITEMS INSUMO
// ============================================

// GETALL ITEMS - Listar items insumo de una reparación
export const getItemsDeReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Listar items de reparación con ID ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// CREATE ITEM - Agregar un item insumo a la reparación
export const addItemAReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        const { idinsumo, cantidad } = req.body;
        // TODO: implementar con service
        res.status(201).json({ message: `Item agregado a reparación ${id}`, data: { idinsumo, cantidad } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// UPDATE ITEM - Modificar cantidad de un item
export const updateItemDeReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        const idItem = parseInt(req.params.idItem as string, 10);
        if (isNaN(id) || isNaN(idItem)) {
            res.status(400).json({ message: 'Los IDs no son válidos' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Item ${idItem} de reparación ${id} actualizado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// DELETE ITEM - Eliminar un item de la reparación
export const deleteItemDeReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        const idItem = parseInt(req.params.idItem as string, 10);
        if (isNaN(id) || isNaN(idItem)) {
            res.status(400).json({ message: 'Los IDs no son válidos' });
            return;
        }
        // TODO: implementar con service
        res.status(200).json({ message: `Item ${idItem} de reparación ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// TOTAL - Calcular y devolver el total de la reparación
export const getTotalDeReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service - usar reparacion.calcularTotal()
        res.status(200).json({ message: `Total de reparación ${id}`, total: 0 });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// ============================================
// FACTURA (emitir desde reparación)
// ============================================

// EMITIR FACTURA - Crear factura para una reparación finalizada
export const emitirFacturaDeReparacion = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }
        // TODO: implementar con service - validar que esté "finalizada", calcular total
        res.status(201).json({ message: `Factura emitida para reparación ${id}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
