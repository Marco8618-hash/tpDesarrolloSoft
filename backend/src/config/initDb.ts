import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { env } from './env';

// esta funcion intenta crear una conexion a la base de datos y si no existe la crea la base de datos la crea

async function initDb() {
    const connection = await mysql.createConnection({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    multipleStatements: true,
    });

    try {
        // Crea la base de datos si no existe
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${env.db.name}\``);
        console.log(`Base de datos "${env.db.name}" verificada/creada.`);

        // Se posiciona a usarla
        await connection.query(`USE \`${env.db.name}\``);

        // Lee el schema.sql y lo ejecuta
        const schemaPath = path.join(__dirname, '../../../database/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf-8');

        await connection.query(schemaSql);
        console.log('Schema aplicado correctamente.');
    } finally {
        await connection.end();
    }
}

// devuelve 0 si se inicializo la base de datos y 1 si no se inicialiazo

initDb()
  .then(() => process.exit(0))
  .catch((error) => {console.error(error); process.exit(1);});