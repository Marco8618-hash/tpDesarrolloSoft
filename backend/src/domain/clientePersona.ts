import { Cliente } from './cliente';

export class ClientePersona extends Cliente {
  nombre = '';
  apellido = '';

  constructor(id: number, cuit: string, nombre: string, apellido: string) {
    super(id, cuit);
    this.nombre = nombre;
    this.apellido = apellido;
  }
}