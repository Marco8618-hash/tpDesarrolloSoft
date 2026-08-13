// CLASE TECNICO

/*

import { Ubicacion } from "./ubicacion";

export class Tecnico {
    id: number;
    cuit: string;
    nombre: string;
    apellido: string;
    ubicacion: Ubicacion;

    constructor(
        id: number,
        cuit: string,
        nombre: string,
        apellido: string,
        ubicacion: Ubicacion
    ) {
        this.id = id;
        this.cuit = cuit;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = ubicacion;
    }
}

*/

import { Ubicacion } from "./ubicacion";
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'tecnicos',
})
export class Tecnico {
    @PrimaryKey({ fieldName: 'idtecnico', autoincrement: true })
    idtecnico!: number;
    @Property({ length: 45, nullable: true })
    cuit!: string;
    @Property({ length: 255, nullable: true })
    nombre!: string;
    @Property({ length: 255, nullable: true })
    apellido!: string;
    @Property({ nullable: true })
    ubicacion!: Ubicacion;

    constructor(
        idtecnico?: number,
        cuit?: string,
        nombre?: string,
        apellido?: string,
        ubicacion?: Ubicacion
    ) {
        if (idtecnico !== undefined) this.idtecnico = idtecnico;
        if (cuit !== undefined) this.cuit = cuit;
        if (nombre !== undefined) this.nombre = nombre;
        if (apellido !== undefined) this.apellido = apellido;
        if (ubicacion !== undefined) this.ubicacion = ubicacion;
    }
}
