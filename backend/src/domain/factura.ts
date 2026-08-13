// CLASE FACTURA

/*

import { Reparacion } from './reparacion';

export class Factura {
    id: number;
    fecha: Date;
    valor: number;
    reparacion: Reparacion;

    constructor(id: number, fecha: Date, valor: number, reparacion: Reparacion) {
        this.id = id;
        this.fecha = fecha;
        this.valor = valor;
        this.reparacion = reparacion;
    }
}

*/

import { Reparacion } from './reparacion';
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'facturas',
})

export class Factura {
    @PrimaryKey({ fieldName: 'idfactura', autoincrement: true })
    idfactura!: number;
    @Property({ fieldName: 'fecha' })
    fecha!: Date;
    @Property({ fieldName: 'valor', precision: 10, scale: 2 })
    valor!: number;
    
    reparacion!: Reparacion;

    constructor(id: number, fecha: Date, valor: number, reparacion: Reparacion) {
        if (id !== undefined) this.idfactura = id;
        if (fecha !== undefined) this.fecha = fecha;
        if (valor !== undefined) this.valor = valor;
        if (reparacion !== undefined) this.reparacion = reparacion;
    }
}