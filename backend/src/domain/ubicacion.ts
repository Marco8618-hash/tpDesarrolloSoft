// CLASE UBICACION

/*

export interface Ubicacion {
    provincia: string;
    localidad: string;
    altura: number;
    calle: string;
}

*/

import { Entity, Property } from '@mikro-orm/decorators/legacy';

@Entity({
  tableName: 'ubicaciones',
})
export class Ubicacion {
    @Property({ fieldName: 'provincia', length: 255 })
    provincia!: string;
    @Property({ fieldName: 'localidad', length: 255 })
    localidad!: string;
    @Property({ fieldName: 'altura', type: 'number' })
    altura!: number;
    @Property({ fieldName: 'calle', length: 255 })
    calle!: string;

    constructor(
        provincia?: string,
        localidad?: string,
        altura?: number,
        calle?: string
    ) {
        if (provincia !== undefined) this.provincia = provincia;
        if (localidad !== undefined) this.localidad = localidad;
        if (altura !== undefined) this.altura = altura;
        if (calle !== undefined) this.calle = calle;
    }
}