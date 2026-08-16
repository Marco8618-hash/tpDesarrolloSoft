import { orm } from '../config/db';
import { Cliente } from '../domain/cliente';

export class ClienteRepository {

  async findById(id: number): Promise<Cliente | null> {
    return await orm.em.findOne(Cliente, { idcliente: id });
  }

  async updateCliente(cliente: Cliente, datos: Partial<Cliente>): Promise<void> {
    orm.em.assign(cliente, datos);
    await orm.em.flush();
  }
}