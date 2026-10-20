import { orm } from '../config/db';
import { ClienteEmpresa } from '../domain/clienteEmpresa';

export class ClienteEmpresaRepository {

  async findAll(): Promise<ClienteEmpresa[]> {
    return await orm.em.find(ClienteEmpresa, { fechaBaja: null });
  }

  async findById(id: number): Promise<ClienteEmpresa | null> {
    return await orm.em.findOne(ClienteEmpresa, { idcliente: id, fechaBaja: null });
  }

  async findByCuit(cuit: string): Promise<ClienteEmpresa | null> {
    return await orm.em.findOne(ClienteEmpresa, { cuit });
  }

  async create(datos: { cuit: string; razonSocial: string; password?: string }): Promise<ClienteEmpresa> {
    const cliente = new ClienteEmpresa(datos.cuit, datos.razonSocial);
    if (datos.password) {
      cliente.password = datos.password;
    }
    orm.em.persist(cliente);
    await orm.em.flush();
    return cliente;
  }

  async update(cliente: ClienteEmpresa, datos: Partial<ClienteEmpresa>): Promise<void> {
    orm.em.assign(cliente, datos);
    await orm.em.flush();
  }

  // Baja lógica: delega al campo heredado de Cliente
  async delete(cliente: ClienteEmpresa): Promise<void> {
    cliente.fechaBaja = new Date();
    await orm.em.flush();
  }
}
