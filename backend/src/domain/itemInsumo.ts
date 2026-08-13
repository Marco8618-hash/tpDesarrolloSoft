// CLASE ITEMINSUMO

/*

import {Insumo} from './insumo';

export class ItemInsumo {
    insumo: Insumo;
    cantidad: number;

    constructor(insumo: Insumo, cantidad: number) {
        this.insumo = insumo;
        this.cantidad = cantidad;
    }

    calcularSubtotal(): number {
        return this.insumo.costo * this.cantidad;
    }
}

*/

import { Entity, Property } from '@mikro-orm/decorators/legacy';
import {Insumo} from './insumo';


@Entity({
  tableName: 'item_insumos',
})
export class ItemInsumo {
    insumo!: Insumo;
    @Property({ fieldName: 'cantidad' })
    cantidad!: number;

    constructor(insumo?: Insumo, cantidad?: number) {
        if (insumo !== undefined) this.insumo = insumo;
        if (cantidad !== undefined) this.cantidad = cantidad;
    }

    calcularSubtotal(): number {
        return this.insumo.costo * this.cantidad;
    }
}