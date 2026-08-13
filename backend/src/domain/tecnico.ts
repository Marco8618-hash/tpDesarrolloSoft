// CLASE TECNICO

import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/decorators/legacy';
import { Ubicacion } from './ubicacion';

@Entity({
  tableName: 'tecnicos',
})
export class Tecnico {
  @PrimaryKey({ fieldName: 'idtecnico', autoincrement: true })
  idtecnico!: number;

  @Property({ fieldName: 'cuit', length: 45, nullable: true })
  cuit!: string;

  @Property({ fieldName: 'nombre', length: 255, nullable: true })
  nombre!: string;

  @Property({ fieldName: 'apellido', length: 255, nullable: true })
  apellido!: string;

  @ManyToOne(() => Ubicacion, { fieldName: 'idubicacion', nullable: true })
  ubicacion!: Ubicacion;

  constructor(cuit: string, nombre: string, apellido: string, ubicacion: Ubicacion) {
    this.cuit = cuit;
    this.nombre = nombre;
    this.apellido = apellido;
    this.ubicacion = ubicacion;
  }
}
