"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
class Factura {
    id;
    fecha;
    valor;
    reparacion;
    constructor(id, fecha, valor, reparacion) {
        this.id = id;
        this.fecha = fecha;
        this.valor = valor;
        this.reparacion = reparacion;
    }
}
exports.Factura = Factura;
