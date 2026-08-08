import mysql from 'mysql2/promise';
import { pool } from '../config/db';
import { Cliente } from '../domain/cliente';

export class ClienteRepository {
  async buscarPorCuit(cuit: string): Promise<Cliente | null> {
    const query = 'SELECT id, cuit FROM clientes WHERE cuit = ?';
    const [registros] = await pool.query<mysql.RowDataPacket[]>(query, [cuit]);

    if (registros.length === 0) {
      return null;
    }

    return registros[0] as Cliente;
  }
}