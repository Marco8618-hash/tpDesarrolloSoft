"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = require("./env");
exports.pool = promise_1.default.createPool({
    host: env_1.env.db.host,
    user: env_1.env.db.user,
    password: env_1.env.db.password,
    database: env_1.env.db.name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
