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
  @PrimaryKey({ fieldName: 'idcliente', autoincrement: true, type: 'number' })
  idcliente!: number;

  @Property({ fieldName: 'cuit', length: 45, nullable: true, type: 'string' })
  cuit!: string;

  @Property({ fieldName: 'password', length: 255, nullable: true, type: 'string' })
  password!: string;

  @Property({ fieldName: 'fecha_baja', nullable: true, type: 'date' })
  fechaBaja: Date | null = null;

  constructor(cuit: string) {
    this.cuit = cuit;
  }
}