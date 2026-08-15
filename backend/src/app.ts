console.log("aca arranca el server")

import express from 'express';
import { RequestContext } from '@mikro-orm/core';
import { initORM, orm } from './config/db';
import router from './routes/indexRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware de MikroORM: crea un EntityManager aislado por cada request
app.use((req, res, next) => {
  RequestContext.create(orm.em, next);
});

app.use('/api/v1/', router);


// FUNCION DE ARRANQUE
async function start() {
  await initORM();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

start();