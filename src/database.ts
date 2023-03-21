import { TProduct, TPurchase, TUser } from "./types";

 
 export const users: TUser[] = [
    {
        id:"001",
        email: "maria@gmail.com",
        password:"123ABC"
    },
    {
        id:"002",
        email:"rosa@gmail.com",
        password:"456DEF"
    },
    {
        id:"003",
        email:"joana@gmail.com",
        password:"789GHI"
    }

 ]

 export const products: TProduct[] = [
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
 ]

 export const purchases: TPurchase[] = [ 
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
 ]


 