// CLASE ITEMINSUMO

import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/decorators/legacy';
import { Insumo } from './insumo';
import { Reparacion } from './reparacion';

@Entity({
  tableName: 'item_insumos',
})
export class ItemInsumo {
  @PrimaryKey({ fieldName: 'iditeminsumo', autoincrement: true })
  iditeminsumo!: number;

  @ManyToOne(() => Reparacion, { fieldName: 'idreparacion' })
  reparacion!: Reparacion;

  @ManyToOne(() => Insumo, { fieldName: 'idinsumo' })
  insumo!: Insumo;

  @Property({ fieldName: 'cantidad' })
  cantidad!: number;

  constructor(reparacion: Reparacion, insumo: Insumo, cantidad: number) {
    this.reparacion = reparacion;
    this.insumo = insumo;
    this.cantidad = cantidad;
  }

  calcularSubtotal(): number {
    return this.insumo.costo * this.cantidad;
  }
}