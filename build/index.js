"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
console.log((0, database_1.createUser)("004", "beltrano@email.com", "beltrano99"));
console.log((0, database_1.getAllUsers)());
console.log((0, database_1.createProduct)("p004", "Monitor HD", 800, types_1.PRODUCT_CATEGORIES.ELECTRONICS));
console.log((0, database_1.getAllProducts)());
console.log("Produto por ID", (0, database_1.getProductById)("1002"));
console.log("Produto por Nome", (0, database_1.queryProductByName)("bolsa"));
//# sourceMappingURL=index.js.map