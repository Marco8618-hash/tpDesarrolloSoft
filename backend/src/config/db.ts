import 'dotenv/config';
import { MikroORM } from '@mikro-orm/mysql';
import { Ubicacion } from '../domain/ubicacion';
import { Cliente } from '../domain/cliente';
import { ClienteEmpresa } from '../domain/clienteEmpresa';
import { ClientePersona } from '../domain/clientePersona';
import { Tecnico } from '../domain/tecnico';
import { Reparacion } from '../domain/reparacion';
import { EstadoReparacion } from '../domain/estadoReparacion';
import { Insumo } from '../domain/insumo';
import { ItemInsumo } from '../domain/itemInsumo';
import { Factura } from '../domain/factura';

export let orm: Awaited<ReturnType<typeof MikroORM.init>>;

export async function initORM() {
  orm = await MikroORM.init({
    entities: [Ubicacion, Cliente, ClienteEmpresa, ClientePersona, Tecnico, Reparacion, EstadoReparacion, Insumo, ItemInsumo, Factura],
    dbName: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3306,
  });

  await orm.schema.ensureDatabase();
  await orm.schema.update();

  console.log('Base de datos y tablas verificadas/creadas con éxito.');

  return orm;
}
