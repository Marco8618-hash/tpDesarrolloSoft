// CLASE UBICACION

import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'ubicaciones',
})
export class Ubicacion {
  @PrimaryKey({ fieldName: 'idubicacion', autoincrement: true, type: 'number' })
  idubicacion!: number;

  @Property({ fieldName: 'provincia', length: 255, type: 'string' })
  provincia!: string;

  @Property({ fieldName: 'localidad', length: 255, type: 'string' })
  localidad!: string;

  @Property({ fieldName: 'altura', type: 'number' })
  altura!: number;

  @Property({ fieldName: 'calle', length: 255, type: 'string' })
  calle!: string;

  constructor(provincia: string, localidad: string, altura: number, calle: string) {
    this.provincia = provincia;
    this.localidad = localidad;
    this.altura = altura;
    this.calle = calle;
  }
}