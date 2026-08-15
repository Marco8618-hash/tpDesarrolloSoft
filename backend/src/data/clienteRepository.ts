import { orm } from '../config/db';
import { Cliente } from '../domain/cliente';

export class ClienteRepository {

  async findById(id: number): Promise<Cliente | null> {
    return await orm.em.findOne(Cliente, { idcliente: id });
  }
  
}