import 'dotenv/config';
import { defineConfig } from '@mikro-orm/mysql';
import { Cliente } from '../domain/cliente';

export default defineConfig({
  entities: [Cliente],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
});