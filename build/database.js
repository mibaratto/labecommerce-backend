"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "001",
        email: "maria@gmail.com",
        password: "123ABC"
    },
    {
        id: "002",
        email: "rosa@gmail.com",
        password: "456DEF"
    },
    {
        id: "003",
        email: "joana@gmail.com",
        password: "789GHI"
    }
];
exports.products = [
    {
        id: "1001",
        name: "cadeira",
        price: 100.00,
        category: "móveis"
    },
    {
        id: "1002",
        name: "aspirador-de-pó",
        price: 50.00,
        category: "eletrodomésticos"
    }
];
exports.purchases = [
    {
        userId: "001",
        productId: "1001",
        quantity: 1,
        totalPrice: 100.00
    },
    {
        userId: "003",
        productId: "1002",
        quantity: 3,
        totalPrice: 150.00
    }
];
//# sourceMappingURL=database.js.map