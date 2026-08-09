"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CambioEstado = void 0;
const estadoReparacion_1 = require("./estadoReparacion");
class CambioEstado extends estadoReparacion_1.EstadoReparacion {
    fecha;
    constructor(nuevoEstado, fecha) {
        super(nuevoEstado.id, nuevoEstado.estado);
        this.fecha = fecha;
    }
}
exports.CambioEstado = CambioEstado;
