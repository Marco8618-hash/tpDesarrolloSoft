import { ClienteRepository } from '../data/clienteRepository';
import { Cliente } from '../domain/cliente';

export class ClienteService {
  private repository = new ClienteRepository();

  async getClientePorId(id: number): Promise<Cliente | null> {
    return await this.repository.findById(id);
  }

  async updateClientePorId(id: number, datos: Partial<Cliente>): Promise<void> {
    const clienteExistente = await this.repository.findById(id);
    if (!clienteExistente) {
      throw new Error(`Cliente con id ${id} no encontrado`);
    }
    await this.repository.updateCliente(clienteExistente, datos);
  }
}

export const clienteService = new ClienteService();