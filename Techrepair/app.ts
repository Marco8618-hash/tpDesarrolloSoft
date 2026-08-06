console.log("aca arranca el server")

import express, { Request, Response } from 'express';
import clienteRouter from './routes/clienteRouter';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/clientes', clienteRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('¡Servidor Express con TypeScript en marcha!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});