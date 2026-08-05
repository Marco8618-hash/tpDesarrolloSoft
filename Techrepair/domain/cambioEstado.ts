import { EstadoReparacion } from './estadoReparacion';

export class CambioEstado extends EstadoReparacion {
    fecha: Date;

    constructor(nuevoEstado: EstadoReparacion, fecha: Date) {
        super(nuevoEstado.id, nuevoEstado.estado);
        this.fecha = fecha;
    }
}