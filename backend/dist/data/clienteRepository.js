"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const db_1 = require("../config/db");
class ClienteRepository {
    async buscarPorCuit(cuit) {
        const query = 'SELECT id, cuit FROM clientes WHERE cuit = ?';
        const [registros] = await db_1.pool.query(query, [cuit]);
        if (registros.length === 0) {
            return null;
        }
        return registros[0];
    }
}
exports.ClienteRepository = ClienteRepository;
