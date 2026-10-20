import 'reflect-metadata';

console.log("aca arranca el server")

import express from 'express';
import path from 'path';
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

// Servir archivos estáticos del frontend (HTML, CSS, JS, imágenes)
const frontendPath = path.join(__dirname, '..', '..', 'frontend');
app.use(express.static(frontendPath));

// Cualquier ruta no definida devuelve el index.html (Express 5 syntax)
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});


// FUNCION DE ARRANQUE
async function start() {
  await initORM();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

start();