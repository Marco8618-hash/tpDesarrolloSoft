"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const clienteRepository_1 = require("../data/clienteRepository");
class ClienteService {
    repository = new clienteRepository_1.ClienteRepository();
    async getClientePorCuit(cuit) {
        return await this.repository.buscarPorCuit(cuit);
    }
}
exports.ClienteService = ClienteService;
