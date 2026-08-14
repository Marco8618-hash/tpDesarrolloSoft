import { Request, Response } from "express";

// REGISTER - Registro de usuario
export const register = async (req: Request, res: Response) => {
    try {
        const { tipo, cuit, nombre, apellido, razonSocial } = req.body;
        // TODO: implementar con service - crear usuario + cliente según tipo
        res.status(201).json({ message: 'Usuario registrado', data: { tipo, cuit } });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// LOGIN - Inicio de sesión
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        // TODO: implementar con service - validar credenciales, generar JWT
        res.status(200).json({ message: 'Login exitoso', token: 'TODO' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// ME - Obtener datos del usuario autenticado
export const getMe = async (req: Request, res: Response) => {
    try {
        // TODO: implementar con service - leer usuario desde token/sesión
        res.status(200).json({ message: 'Datos del usuario autenticado' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
