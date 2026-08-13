// CLASE REPARACION

/*

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

*/


import { Collection } from '@mikro-orm/core';
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany } from '@mikro-orm/decorators/legacy';
import { Cliente } from './cliente';
import { Tecnico } from './tecnico';
import { Ubicacion } from './ubicacion';
import { ItemInsumo } from './itemInsumo';
import { EstadoReparacion } from './estadoReparacion';



@Entity({
  tableName: 'reparaciones',
})
export class Reparacion {
  @PrimaryKey({ fieldName: 'idreparacion', autoincrement: true })
  idreparacion!: number;

  @Property({ fieldName: 'descripcion', length: 255, nullable: true })
  descripcion!: string;

  @ManyToOne(() => Cliente, { fieldName: 'idcliente', nullable: true })
  cliente!: Cliente;

  @ManyToOne(() => Tecnico, { fieldName: 'idtecnico', nullable: true })
  tecnico!: Tecnico;

  @ManyToOne(() => Ubicacion, { fieldName: 'idubicacion', nullable: true })
  ubicacion!: Ubicacion;

  @ManyToOne(() => EstadoReparacion, { fieldName: 'idestado', nullable: true })
  estado!: EstadoReparacion;

  @OneToMany(() => ItemInsumo, itemInsumo => itemInsumo.reparacion)
  itemsInsumo = new Collection<ItemInsumo>(this);

  constructor(
    cliente: Cliente,
    ubicacion: Ubicacion,
    descripcion?: string,
    tecnico?: Tecnico,
    estado?: EstadoReparacion
  ) {
    this.cliente = cliente;
    this.ubicacion = ubicacion;
    if (descripcion !== undefined) this.descripcion = descripcion;
    if (tecnico !== undefined) this.tecnico = tecnico;
    if (estado !== undefined) this.estado = estado;
  }

  calcularTotal(): number {
    let total = 0;
    for (const insumo of this.itemsInsumo) {
      total += insumo.calcularSubtotal();
    }
    return total;
  }
}
