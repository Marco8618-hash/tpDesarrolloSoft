import { orm } from '../config/db';
import { Cliente } from '../domain/cliente';

export class ClienteRepository {

  async findAll(): Promise<Cliente[]> {
    return await orm.em.find(Cliente, { fechaBaja: null });
  }

  async findById(id: number): Promise<Cliente | null> {
    return await orm.em.findOne(Cliente, { idcliente: id, fechaBaja: null });
  }

  async findByCuit(cuit: string): Promise<Cliente | null> {
    return await orm.em.findOne(Cliente, { cuit, fechaBaja: null });
  }

  async update(cliente: Cliente, datos: Partial<Cliente>): Promise<void> {
    orm.em.assign(cliente, datos);
    await orm.em.flush();
  }

  // Baja lógica: setea fechaBaja con la fecha actual en vez de borrar el registro
  async delete(cliente: Cliente): Promise<void> {
    cliente.fechaBaja = new Date();
    await orm.em.flush();
  }
}