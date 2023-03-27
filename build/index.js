"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
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
console.log((0, database_1.createUser)("004", "beltrano@email.com", "beltrano99"));
console.log((0, database_1.getAllUsers)());
console.log((0, database_1.createProduct)("p004", "Monitor HD", 800, types_1.PRODUCT_CATEGORIES.ELECTRONICS));
console.log((0, database_1.getAllProducts)());
console.log("Produto por ID", (0, database_1.getProductById)("1002"));
console.log("Produto por Nome", (0, database_1.queryProductByName)("bolsa"));
//# sourceMappingURL=index.js.map