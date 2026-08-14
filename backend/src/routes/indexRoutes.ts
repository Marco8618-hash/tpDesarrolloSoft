// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
import clienteRoutes from './clienteRoutes';
import tecnicoRoutes from './tecnicoRoutes';
import reparacionRoutes from './reparacionRoutes';
import facturaRoutes from './facturasRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clientes', clienteRoutes);
router.use('/tecnicos', tecnicoRoutes);
router.use('/reparaciones', reparacionRoutes);
router.use('/facturas', facturaRoutes);

export default router;