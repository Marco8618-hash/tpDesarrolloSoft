// CLASE CLIENTE PERSONA

/*

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

*/

import { Cliente } from "./cliente";
import { Entity, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'clientes_persona',
})

export class ClientePersona extends Cliente {
  @Property({ fieldName: 'nombre', length: 255 })
  nombre!: string;

  @Property({ fieldName: 'apellido', length: 255 })
  apellido!: string;

  constructor(cuit: string, nombre: string, apellido: string) {
    super(cuit);
    this.nombre = nombre;
    this.apellido = apellido;
  }
}