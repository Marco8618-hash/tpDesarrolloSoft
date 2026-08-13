// CLASE ESTADOREPARACION

/*

export class EstadoReparacion {
    id: number;
    estado: string;

    constructor(id: number, estado: string) {
        this.id = id;
        this.estado = estado;
    }
}

*/

import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';


@Entity({
  tableName: 'estados_reparacion',
})
export class EstadoReparacion {
    @PrimaryKey({ fieldName: 'idestado', autoincrement: true })
    idestado!: number;
    @Property({ fieldName: 'estado', length: 255 })
    estado!: string;

    constructor(idestado?: number, estado?: string) {
        if (idestado !== undefined) this.idestado = idestado;
        if (estado !== undefined) this.estado = estado;
    }
}