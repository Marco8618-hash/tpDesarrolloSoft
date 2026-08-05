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
