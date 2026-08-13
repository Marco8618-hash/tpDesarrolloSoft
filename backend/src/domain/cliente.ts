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

import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'clientes',
  inheritance: 'tpt',
})

export class Cliente {
  @PrimaryKey({ fieldName: 'idcliente', autoincrement: true })
  idcliente!: number;

  @Property({ fieldName: 'cuit', length: 45, nullable: true })
  cuit!: string;

  constructor(cuit: string) {
    this.cuit = cuit;
  }
}