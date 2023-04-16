import { TProduct, TPurchase, TUser } from "./types";



// export function createUser(id:string, email:string, password:string):TUser {
//      const newUser: TUser = {
//         id,
//         email,
//         password,
//      }
//     users.push(newUser)
//     return newUser
// }

// export function getAllUsers():TUser[] {
//     return users
// }

// export function getUserById(id:string): TUser | undefined {
//     return users.find((user)=> user.id === id)
// }

// export function getUserByEmail(email:string): TUser | undefined {
//     return users.find((user)=> user.email === email)
// }

// export function createProduct(id:string, name:string, price:number):TProduct {
//     const newProduct = {
//     id,
//     name,
//     price,
//     category
//     }
//     products.push(newProduct)
//     return newProduct
// }

// export function createPurchase(userId:string, productId:string, quantity: number, totalPrice: number):string {
//     const newPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice
//     }
//     return "Compra criada com sucesso!"
// }

// export function getPurchasesByUserId(userId:string): TPurchase[] {
//     return purchases.filter((purchase) => purchase.userId === userId)
// }

// export function getAllProducts():TProduct[] {
//     return products
// }

// export function getProductById(idToSearch:string): TProduct | undefined {
//     const productSelected = products.find((product) => product.id === idToSearch)
//     return productSelected
// }

// export function queryProductByName(query:string): TProduct[] | undefined {

//     const protuctSearched = products.filter(product => query === ''|| product.name.toLowerCase().includes(query.toLowerCase()))
//     return protuctSearched
// }
