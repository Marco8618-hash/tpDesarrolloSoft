"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEmpresa = void 0;
const cliente_1 = require("./cliente");
class ClienteEmpresa extends cliente_1.Cliente {
    razonSocial = '';
    constructor(id, cuit, razonSocial) {
        super(id, cuit);
        this.razonSocial = razonSocial;
    }
}
exports.ClienteEmpresa = ClienteEmpresa;
