import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName } from "./database";
import { PRODUCT_CATEGORIES } from "./types"


// console.log("Usuarios", users, "Produtos", products, "Compras", purchases)


console.log(createUser("004", "beltrano@email.com", "beltrano99"))

console.log(getAllUsers())

console.log(createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORIES.ELECTRONICS))

console.log(getAllProducts())

console.log("Produto por ID", getProductById("1002"))

console.log("Produto por Nome",queryProductByName("bolsa"))

