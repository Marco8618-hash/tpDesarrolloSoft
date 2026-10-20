import { Request, Response } from "express";
import { clienteService } from "../services/clienteService";
import { clientePersonaService } from "../services/clientePersonaService";
import { clienteEmpresaService } from "../services/clienteEmpresaService";
import { ClientePersona } from "../domain/clientePersona";
import { ClienteEmpresa } from "../domain/clienteEmpresa";

// Helper para centralizar el mapeo de errores del negocio/servicio a códigos HTTP
const handleError = (res: Response, error: any) => {
    const message = error instanceof Error ? error.message : 'Error interno del servidor';

    if (message.includes('no encontrado') || message.includes('dado de baja')) {
        res.status(404).json({ message });
        return;
    }

    if (
        message.includes('obligatorio') ||
        message.includes('obligatoria') ||
        message.includes('Ya existe') ||
        message.includes('no es válido') ||
        message.includes('caracteres')
    ) {
        res.status(400).json({ message });
        return;
    }

    res.status(500).json({ message });
};

// Formatea el cliente para la respuesta HTTP eliminando datos sensibles como la contraseña
const formatCliente = (cliente: any) => {
    const { password, ...resto } = cliente;
    return resto;
};

// PERFIL - Obtener los datos del cliente autenticado a partir de req.user (provisto por authMiddleware)
export const getPerfil = async (req: Request, res: Response) => {
    try {
        if (!req.user || !req.user.id) {
            res.status(401).json({ message: 'No autenticado' });
            return;
        }

        const cliente = await clienteService.getById(req.user.id);
        res.status(200).json(formatCliente(cliente));
    } catch (error) {
        handleError(res, error);
    }
};

// GETALL - Listar todos los clientes (polimórfico: personas y empresas)
export const getAllClientes = async (_req: Request, res: Response) => {
    try {
        const clientes = await clienteService.getAll();
        res.status(200).json(clientes.map(formatCliente));
    } catch (error) {
        handleError(res, error);
    }
};

// GETALL - Listar solo clientes personas
export const getAllPersonas = async (_req: Request, res: Response) => {
    try {
        const personas = await clientePersonaService.getAll();
        res.status(200).json(personas.map(formatCliente));
    } catch (error) {
        handleError(res, error);
    }
};

// GETALL - Listar solo clientes empresas
export const getAllEmpresas = async (_req: Request, res: Response) => {
    try {
        const empresas = await clienteEmpresaService.getAll();
        res.status(200).json(empresas.map(formatCliente));
    } catch (error) {
        handleError(res, error);
    }
};

// GETONE - Obtener un cliente por ID (sea persona o empresa)
export const getClientePorId = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        const cliente = await clienteService.getById(id);
        res.status(200).json(formatCliente(cliente));
    } catch (error) {
        handleError(res, error);
    }
};

// CREATE - Registrar o dar de alta un cliente persona (con contraseña opcional)
export const createClientePersona = async (req: Request, res: Response) => {
    try {
        const { cuit, nombre, apellido, password } = req.body;
        const nuevoCliente = await clientePersonaService.create({ cuit, nombre, apellido, password });
        res.status(201).json({
            message: 'Cliente persona creado exitosamente',
            data: formatCliente(nuevoCliente)
        });
    } catch (error) {
        handleError(res, error);
    }
};

// CREATE - Registrar o dar de alta un cliente empresa (con contraseña opcional)
export const createClienteEmpresa = async (req: Request, res: Response) => {
    try {
        const { cuit, razonSocial, password } = req.body;
        const nuevoCliente = await clienteEmpresaService.create({ cuit, razonSocial, password });
        res.status(201).json({
            message: 'Cliente empresa creado exitosamente',
            data: formatCliente(nuevoCliente)
        });
    } catch (error) {
        handleError(res, error);
    }
};

// UPDATE - Actualizar datos de un cliente persona
export const updateClientePersona = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        await clientePersonaService.update(id, req.body);
        res.status(200).json({ message: `Cliente persona con ID ${id} actualizado exitosamente` });
    } catch (error) {
        handleError(res, error);
    }
};

// UPDATE - Actualizar datos de un cliente empresa
export const updateClienteEmpresa = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        await clienteEmpresaService.update(id, req.body);
        res.status(200).json({ message: `Cliente empresa con ID ${id} actualizado exitosamente` });
    } catch (error) {
        handleError(res, error);
    }
};

// UPDATE - Actualizar cliente genérico (detecta el subtipo buscando la entidad)
export const updateCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        const cliente = await clienteService.getById(id);
        if (cliente instanceof ClientePersona) {
            await clientePersonaService.update(id, req.body);
        } else if (cliente instanceof ClienteEmpresa) {
            await clienteEmpresaService.update(id, req.body);
        } else {
            res.status(400).json({ message: 'Tipo de cliente no reconocido para actualización' });
            return;
        }

        res.status(200).json({ message: `Cliente con ID ${id} actualizado exitosamente` });
    } catch (error) {
        handleError(res, error);
    }
};

// DELETE - Baja lógica de un cliente (aplica para cualquier tipo de cliente)
export const deleteCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: 'El ID no es válido' });
            return;
        }

        await clienteService.delete(id);
        res.status(200).json({ message: `Cliente con ID ${id} dado de baja exitosamente` });
    } catch (error) {
        handleError(res, error);
    }
};