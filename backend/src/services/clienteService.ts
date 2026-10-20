import { ClienteRepository } from '../data/clienteRepository';
import { Cliente } from '../domain/cliente';

export class ClienteService {
  private repository = new ClienteRepository();

  async getAll(): Promise<Cliente[]> {
    return await this.repository.findAll();
  }

  async getById(id: number): Promise<Cliente> {
    const cliente = await this.repository.findById(id);
    if (!cliente) {
      throw new Error(`Cliente con id ${id} no encontrado o dado de baja`);
    }
    return cliente;
  }

  async getByCuit(cuit: string): Promise<Cliente | null> {
    return await this.repository.findByCuit(cuit);
  }

  // Baja lógica: valida que no esté ya dado de baja antes de proceder
  async delete(id: number): Promise<void> {
    const cliente = await this.repository.findById(id);
    if (!cliente) {
      throw new Error(`Cliente con id ${id} no encontrado o ya está dado de baja`);
    }
    await this.repository.delete(cliente);
  }
}

export const clienteService = new ClienteService();