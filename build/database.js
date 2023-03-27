"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryProductByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
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
        name: "bolsa",
        price: 100.00,
        category: types_1.PRODUCT_CATEGORIES.ACCESSORIES
    },
    {
        id: "1002",
        name: "aspirador-de-pó",
        price: 50.00,
        category: types_1.PRODUCT_CATEGORIES.ELECTRONICS
    },
    {
        id: "1003",
        name: "camisa",
        price: 50.00,
        category: types_1.PRODUCT_CATEGORIES.CLOTHES_AND_SHOES
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
function createUser(id, email, password) {
    const newUser = {
        id,
        email,
        password,
    };
    exports.users.push(newUser);
    return "Usuário cadastrado com sucesso!";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = {
        id,
        name,
        price,
        category
    };
    return "Produto criado com sucesso!";
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    const productSelected = exports.products.find((product) => product.id === idToSearch);
    return productSelected;
}
exports.getProductById = getProductById;
function queryProductByName(query) {
    const protuctSearched = exports.products.filter(product => query === '' || product.name.toLowerCase().includes(query.toLowerCase()));
    return protuctSearched;
}
exports.queryProductByName = queryProductByName;
//# sourceMappingURL=database.js.map