import { Cliente } from './cliente';
import { Tecnico } from './tecnico';
import { Ubicacion } from './ubicacion';
import { ItemInsumo } from './itemInsumo';
import { EstadoReparacion } from './estadoReparacion';
import { CambioEstado } from './cambioEstado';


export class Reparacion {
  id: number;
  descripcion: string;
  cliente : Cliente;
  tecnico : Tecnico;
  ubicacion : Ubicacion;
  itemsInsumo: ItemInsumo[];
  cambiosEstado: CambioEstado[];

  constructor(id: number, descripcion: string, cliente: Cliente, tecnico: Tecnico, ubicacion: Ubicacion, itemsInsumo: ItemInsumo[], cambiosEstado: CambioEstado[]) {
    this.id = id;
    this.descripcion = descripcion;
    this.cliente = cliente;
    this.tecnico = tecnico;
    this.ubicacion = ubicacion;
    this.itemsInsumo = itemsInsumo;
    this.cambiosEstado = cambiosEstado;
  }

  calcularTotal(): number {
    let total = 0;
    for (const insumo of this.itemsInsumo) {
      total += insumo.calcularSubtotal();
    }
    return total;
  }

  nuevoEstado(nuevoEstado: EstadoReparacion): void {
    const fechaActual = new Date();
    const nuevoCambio = new CambioEstado(nuevoEstado, fechaActual);
    this.cambiosEstado.push(nuevoCambio);
  }
}
