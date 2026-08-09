"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("aca arranca el server");
const express_1 = __importDefault(require("express"));
const clienteRouter_1 = __importDefault(require("./routes/clienteRouter"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/clientes', clienteRouter_1.default);
app.get('/', (req, res) => {
    res.send('¡Servidor Express con TypeScript en marcha!');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
