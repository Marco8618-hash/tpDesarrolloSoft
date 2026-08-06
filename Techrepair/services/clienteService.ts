import { ClienteRepository } from '../data/clienteRepository';
import { Cliente } from '../domain/cliente';

export class ClienteService {
  private repository = new ClienteRepository();

  async getClientePorCuit(cuit: string): Promise<Cliente | null> {
    return await this.repository.buscarPorCuit(cuit);
  }
}