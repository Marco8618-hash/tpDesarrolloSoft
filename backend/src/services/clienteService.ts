import { ClienteRepository } from '../data/clienteRepository';
import { Cliente } from '../domain/cliente';

export class ClienteService {
  private repository = new ClienteRepository();

  async getClientePorId(id: number): Promise<Cliente | null> {
    return await this.repository.findById(id);
  }
}

export const clienteService = new ClienteService();