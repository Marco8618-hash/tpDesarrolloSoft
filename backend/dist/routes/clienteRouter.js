"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteService_1 = require("../services/clienteService");
const router = (0, express_1.Router)();
const clienteService = new clienteService_1.ClienteService();
// GETONE cliente por cuit
router.get('/:cuit', async (req, res) => {
    const cuit = req.params.cuit;
    ;
    const cliente = await clienteService.getClientePorCuit(cuit);
    if (!cliente) {
        res.status(404).json({ message: 'Cliente no encontrado' });
        return;
    }
    res.status(200).json(cliente);
});
// FINDALL clientes
router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Aquí se devolverían todos los clientes' });
});
exports.default = router;
