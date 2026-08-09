"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparacion = void 0;
const cambioEstado_1 = require("./cambioEstado");
class Reparacion {
    id;
    descripcion;
    cliente;
    tecnico;
    ubicacion;
    itemsInsumo;
    cambiosEstado;
    constructor(id, descripcion, cliente, tecnico, ubicacion, itemsInsumo, cambiosEstado) {
        this.id = id;
        this.descripcion = descripcion;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.ubicacion = ubicacion;
        this.itemsInsumo = itemsInsumo;
        this.cambiosEstado = cambiosEstado;
    }
    calcularTotal() {
        let total = 0;
        for (const insumo of this.itemsInsumo) {
            total += insumo.calcularSubtotal();
        }
        return total;
    }
    nuevoEstado(nuevoEstado) {
        const fechaActual = new Date();
        const nuevoCambio = new cambioEstado_1.CambioEstado(nuevoEstado, fechaActual);
        this.cambiosEstado.push(nuevoCambio);
    }
}
exports.Reparacion = Reparacion;
