import { Request, Response } from "express";
import { authService } from "../services/authService";

// Helper para centralizar el mapeo de errores del servicio a códigos HTTP
const handleError = (res: Response, error: any) => {
    const message = error instanceof Error ? error.message : 'Error interno del servidor';

    if (message.includes('Credenciales inválidas') || message.includes('no posee una contraseña')) {
        res.status(401).json({ message });
        return;
    }

    if (message.includes('no encontrado') || message.includes('dado de baja')) {
        res.status(404).json({ message });
        return;
    }

    if (message.includes('obligatorio') || message.includes('obligatoria')) {
        res.status(400).json({ message });
        return;
    }

    res.status(500).json({ message });
};

// LOGIN - Inicio de sesión por CUIT y Contraseña (emisión de JWT)
export const login = async (req: Request, res: Response) => {
    try {
        const { cuit, password } = req.body;
        const result = await authService.login(cuit, password);
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: result.token,
            usuario: result.usuario,
        });
    } catch (error) {
        handleError(res, error);
    }
};
