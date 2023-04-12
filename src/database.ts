import { TProduct, TPurchase, TUser, PRODUCT_CATEGORIES } from "./types";

 
 export const users: TUser[] = [
    {
        id:"u001",
        email: "maria@gmail.com",
        password:"123ABC"
    },
    {
        id:"u002",
        email:"rosa@gmail.com",
        password:"456DEF"
    },
    {
        id:"u003",
        email:"joana@gmail.com",
        password:"789GHI"
    }

 ]

 export const products: TProduct[] = [
    {
        id: "p1001",
        name: "bolsa",
        price: 100.00,
        category: PRODUCT_CATEGORIES.ACCESSORIES
    },
    {
        id: "p1002",
        name: "aspirador-de-pó",
        price: 50.00,
        category: PRODUCT_CATEGORIES.ELECTRONICS
    },
    {
        id: "p1003",
        name: "camisa",
        price: 50.00,
        category: PRODUCT_CATEGORIES.CLOTHES_AND_SHOES
    }
 ]

 export const purchases: TPurchase[] = [ 
    {
        userId: "c001",
        productId: "c1001",
        quantity: 1,
        totalPrice: 100.00
    },
    {
        userId: "c003",
        productId: "1002",
        quantity: 3,
        totalPrice: 150.00
    }
 ]

export function createUser(id:string, email:string, password:string):TUser {
     const newUser: TUser = {
        id,
        email,
        password,
     }
    users.push(newUser)
    return newUser
}

export function getAllUsers():TUser[] {
    return users
}

export function createProduct(id:string, name:string, price:number, category:PRODUCT_CATEGORIES):string {
    const newProduct = {
    id,
    name,
    price,
    category
    }
    return "Produto criado com sucesso!"
}

export function getAllProducts():TProduct[] {
    return products
}


export function getProductById(idToSearch:string): TProduct | undefined {
    const productSelected = products.find((product) => product.id === idToSearch)

    return productSelected
}

export function queryProductByName(query:string): TProduct[] | undefined {

    const protuctSearched = products.filter(product => query === ''|| product.name.toLowerCase().includes(query.toLowerCase()))
    return protuctSearched
}


// .filter(product => searchFilter === "" || product.name.toLowerCase().includes(searchFilter.toLowerCase()))