// CLASE INSUMO

/*

export class Insumo {
    id: number;
    nombre: string;
    costo: number;

    constructor(id: number, nombre: string, costo: number) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
    }
}

*/
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({
    tableName: 'insumos',
})
export class Insumo {
    @PrimaryKey({ fieldName: 'idinsumo', autoincrement: true })
    idinsumo!: number;
    @Property({ fieldName: 'nombre', length: 255 })
    nombre!: string;
    @Property({ fieldName: 'costo', type: 'number' })
    costo!: number;

    constructor(nombre: string, costo?: number) {
        this.nombre = nombre;
        if (costo !== undefined) this.costo = costo;
    }
}