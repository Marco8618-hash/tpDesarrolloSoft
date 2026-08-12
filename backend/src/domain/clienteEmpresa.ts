// CLASE CLIENTE EMPRESA

/*

import { Cliente } from './cliente';

export class ClienteEmpresa extends Cliente {
  razonSocial = '';

  constructor(id: number, cuit: string, razonSocial: string) {
    super(id, cuit);
    this.razonSocial = razonSocial;
  }
}

*/

import { Cliente } from "./cliente";
import { Entity, Property } from "@mikro-orm/decorators/legacy";

@Entity({
  tableName: 'clientes_empresa',
})

export class ClienteEmpresa extends Cliente {
  @Property({ fieldName: 'razon_social', length: 255 })
  razonSocial!: string;

  constructor(id?: number, cuit?: string, razonSocial?: string) {
    super(id, cuit);
    if (razonSocial !== undefined) this.razonSocial = razonSocial;
  }
}

