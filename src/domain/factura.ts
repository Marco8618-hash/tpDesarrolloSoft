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