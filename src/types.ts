export type TUser= {
    id:string
    name:string
    email:string
    password:string
    createdAt:string
}

export type TProduct= {
    id:string
    name:string
    price:number
    description:string
    imageUrl:string
}

export type TPurchase= {
    id:string
    buyer:TUser
    totalPrice:number
    createdAt:string
    paid:number
}
