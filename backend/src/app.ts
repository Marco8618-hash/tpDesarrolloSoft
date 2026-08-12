console.log("aca arranca el server")

import express, { Request, Response } from 'express';
import { initORM } from './config/db';
import { initDatabase } from './config/initDb';
import clienteRouter from './routes/clienteRouter';

const app = express();
const PORT = 3000;

app.use(express.json());

//#region ENDPOINTS

app.use('/api/clientes', clienteRouter);

//#endregion


// HOME (se mueve a un router que no este asociado a una clase?)
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido al HOME');
});

// FUNCION DE ARRANQUE
async function start() {
  await initDatabase();
  await initORM();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

start();