console.log("aca arranca el server")

import express, { Request, Response } from 'express';
import { initORM } from './config/db';
import { initDatabase } from './config/initDb';
import router from './routes/indexRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1/', router);


// FUNCION DE ARRANQUE
async function start() {
  await initDatabase();
  await initORM();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

start();