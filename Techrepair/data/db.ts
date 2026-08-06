import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // Tu usuario de MySQL
  password: '123', // Tu contraseña de MySQL
  database: 'techrepair',  // Nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});