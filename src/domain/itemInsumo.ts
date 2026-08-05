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