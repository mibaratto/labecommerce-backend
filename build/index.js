"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req, res) => {
    res.send("Pong!");
});
app.get("/users", (req, res) => {
    res.status(200);
    res.send((0, database_1.getAllUsers)());
});
app.get("/products", (req, res) => {
    res.status(200);
    res.send((0, database_1.getAllProducts)());
});
app.get("/product/search", (req, res) => {
    const busca = req.query.q;
    res.status(200);
    res.send((0, database_1.queryProductByName)(busca));
});
//# sourceMappingURL=index.js.map