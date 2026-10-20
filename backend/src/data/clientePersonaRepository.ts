import { orm } from '../config/db';
import { ClientePersona } from '../domain/clientePersona';

export class ClientePersonaRepository {

  async findAll(): Promise<ClientePersona[]> {
    return await orm.em.find(ClientePersona, { fechaBaja: null });
  }

  async findById(id: number): Promise<ClientePersona | null> {
    return await orm.em.findOne(ClientePersona, { idcliente: id, fechaBaja: null });
  }

  async findByCuit(cuit: string): Promise<ClientePersona | null> {
    return await orm.em.findOne(ClientePersona, { cuit });
  }

  async create(datos: { cuit: string; nombre: string; apellido: string; password?: string }): Promise<ClientePersona> {
    const cliente = new ClientePersona(datos.cuit, datos.nombre, datos.apellido);
    if (datos.password) {
      cliente.password = datos.password;
    }
    orm.em.persist(cliente);
    await orm.em.flush();
    return cliente;
  }

  async update(cliente: ClientePersona, datos: Partial<ClientePersona>): Promise<void> {
    orm.em.assign(cliente, datos);
    await orm.em.flush();
  }

  // Baja lógica: delega al campo heredado de Cliente
  async delete(cliente: ClientePersona): Promise<void> {
    cliente.fechaBaja = new Date();
    await orm.em.flush();
  }
}
