// CLASE CLIENTE

/*
export class Cliente {
  id: number;
  cuit: string;

  constructor(
    id: number,
    cuit: string,
  ) {
    this.id = id;
    this.cuit = cuit;
  }

}
*/

import { Entity, PrimaryKey, Property, InheritanceType } from '@mikro-orm/core';

@Entity({
  tableName: 'clientes',
  inheritance: InheritanceType.JOINED,
})

export class Cliente {
  @PrimaryKey({ fieldName: 'idcliente', autoincrement: true })
  id!: number;

  @Property({ length: 45, nullable: true })
  cuit!: string;

  constructor(id?: number, cuit?: string) {
    if (id !== undefined) this.id = id;
    if (cuit !== undefined) this.cuit = cuit;
  }
}