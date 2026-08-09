"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientePersona = void 0;
const cliente_1 = require("./cliente");
class ClientePersona extends cliente_1.Cliente {
    nombre = '';
    apellido = '';
    constructor(id, cuit, nombre, apellido) {
        super(id, cuit);
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
exports.ClientePersona = ClientePersona;
