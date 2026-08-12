import { MikroORM, SchemaGenerator } from '@mikro-orm/mysql';
import config from './mikro-orm.config';

// esta funcion intenta crear una conexion a la base de datos y si no existe la crea la base de datos la crea

export async function initDatabase() {
  const orm = await MikroORM.init(config);

  try {
    const generator = new SchemaGenerator(orm.em);

    await generator.ensureDatabase();
    await generator.update();

    console.log('Base de datos y tablas verificadas/creadas con éxito.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    await orm.close(true);
  }
}

//para ejecutar este archivo en terminal con tsx:
if (require.main === module) {
  initDatabase();
}