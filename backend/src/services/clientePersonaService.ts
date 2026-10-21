import bcrypt from 'bcryptjs';
import { ClientePersonaRepository } from '../data/clientePersonaRepository';
import { ClientePersona } from '../domain/clientePersona';

export class ClientePersonaService {
  private repository = new ClientePersonaRepository();

  async getAll(): Promise<ClientePersona[]> {
    return await this.repository.findAll();
  }

  async getById(id: number): Promise<ClientePersona> {
    const cliente = await this.repository.findById(id);
    if (!cliente) {
      throw new Error(`ClientePersona con id ${id} no encontrado o dado de baja`);
    }
    return cliente;
  }

  async create(datos: { cuit: string; nombre: string; apellido: string; password: string }): Promise<ClientePersona> {
    // Validaciones de negocio
    if (!datos.cuit || datos.cuit.trim() === '') {
      throw new Error('El CUIT es obligatorio');
    }
    if (!datos.nombre || datos.nombre.trim() === '') {
      throw new Error('El nombre es obligatorio');
    }
    if (!datos.apellido || datos.apellido.trim() === '') {
      throw new Error('El apellido es obligatorio');
    }

    // Validar que el CUIT no esté ya registrado
    const existente = await this.repository.findByCuit(datos.cuit);
    if (existente) {
      throw new Error(`Ya existe un cliente con el CUIT ${datos.cuit}`);
    }

    let passwordFinal = datos.password;
    if (datos.password) {
      if (datos.password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres');
      }
      passwordFinal = await bcrypt.hash(datos.password, 10);
    }

    return await this.repository.create({
      ...datos,
      password: passwordFinal,
    });
  }

  async update(id: number, datos: Partial<ClientePersona>): Promise<void> {
    const cliente = await this.repository.findById(id);
    if (!cliente) {
      throw new Error(`ClientePersona con id ${id} no encontrado o dado de baja`);
    }

    // Si se quiere cambiar el CUIT, validar que no esté en uso por otro cliente
    if (datos.cuit && datos.cuit !== cliente.cuit) {
      const existente = await this.repository.findByCuit(datos.cuit);
      if (existente) {
        throw new Error(`Ya existe un cliente con el CUIT ${datos.cuit}`);
      }
    }

    // No permitir cambiar fechaBaja por esta vía (usar delete para eso)
    delete (datos as any).fechaBaja;

    await this.repository.update(cliente, datos);
  }

  async delete(id: number): Promise<void> {
    const cliente = await this.repository.findById(id);
    if (!cliente) {
      throw new Error(`ClientePersona con id ${id} no encontrado o ya está dado de baja`);
    }
    await this.repository.delete(cliente);
  }
}

export const clientePersonaService = new ClientePersonaService();
