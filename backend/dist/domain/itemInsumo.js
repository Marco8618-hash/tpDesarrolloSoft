"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemInsumo = void 0;
class ItemInsumo {
    insumo;
    cantidad;
    constructor(insumo, cantidad) {
        this.insumo = insumo;
        this.cantidad = cantidad;
    }
    calcularSubtotal() {
        return this.insumo.costo * this.cantidad;
    }
}
exports.ItemInsumo = ItemInsumo;
