"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tecnico = void 0;
class Tecnico {
    id;
    cuit;
    nombre;
    apellido;
    ubicacion;
    constructor(id, cuit, nombre, apellido, ubicacion) {
        this.id = id;
        this.cuit = cuit;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = ubicacion;
    }
}
exports.Tecnico = Tecnico;
