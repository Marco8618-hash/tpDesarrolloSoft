import { Cliente } from './cliente';

export class ClienteEmpresa extends Cliente {
  razonSocial = '';

  constructor(id: number, cuit: string, razonSocial: string) {
    super(id, cuit);
    this.razonSocial = razonSocial;
  }
}
