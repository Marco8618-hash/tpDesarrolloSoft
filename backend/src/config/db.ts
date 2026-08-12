import { MikroORM, EntityManager } from '@mikro-orm/mysql';
import config from './mikro-orm.config';

export let orm: MikroORM;
export let em: EntityManager;

export async function initORM() {

  // Inicializa MikroORM con la configuración del .env
  orm = await MikroORM.init(config);
  
  // pasa la configuracion al entity manager para que la usen los repositorios
  em = orm.em;

  return orm;
}