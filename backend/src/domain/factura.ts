// CLASE FACTURA

import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/decorators/legacy';
import { Reparacion } from './reparacion';

@Entity({
  tableName: 'facturas',
})
export class Factura {
  @PrimaryKey({ fieldName: 'idfactura', autoincrement: true, type: 'number' })
  idfactura!: number;

  @Property({ fieldName: 'fecha', type: 'date' })
  fecha!: Date;

  @Property({ fieldName: 'valor', precision: 10, scale: 2, type: 'number' })
  valor!: number;

  @ManyToOne(() => Reparacion, { fieldName: 'idreparacion' })
  reparacion!: Reparacion;

  constructor(reparacion: Reparacion, fecha?: Date, valor?: number) {
    this.reparacion = reparacion;
    if (fecha !== undefined) this.fecha = fecha;
    if (valor !== undefined) this.valor = valor;
  }
}