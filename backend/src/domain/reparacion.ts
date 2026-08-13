import { Cliente } from './cliente';
import { Tecnico } from './tecnico';
import { Ubicacion } from './ubicacion';
import { ItemInsumo } from './itemInsumo';
import { EstadoReparacion } from './estadoReparacion';


export class Reparacion {
  id: number;
  descripcion: string;
  cliente : Cliente;
  tecnico : Tecnico;
  ubicacion : Ubicacion;
  itemsInsumo: ItemInsumo[];
  estado: EstadoReparacion;

  constructor(id: number, descripcion: string, cliente: Cliente, tecnico: Tecnico, ubicacion: Ubicacion, itemsInsumo: ItemInsumo[], estado: EstadoReparacion) {
    this.id = id;
    this.descripcion = descripcion;
    this.cliente = cliente;
    this.tecnico = tecnico;
    this.ubicacion = ubicacion;
    this.itemsInsumo = itemsInsumo;
    this.estado = estado;
  }

  calcularTotal(): number {
    let total = 0;
    for (const insumo of this.itemsInsumo) {
      total += insumo.calcularSubtotal();
    }
    return total;
  }
}
