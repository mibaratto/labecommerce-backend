<<<<<<< HEAD
<<<<<<< HEAD
import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName } from "./database";
=======
import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName, createPurchase } from "./database";
=======
import { users, products, purchases, getAllUsers, getUserById, createUser, createProduct, getAllProducts, getProductById, queryProductByName, createPurchase } from "./database";
>>>>>>> eb9c6c5 (validate existing user)
//import { PRODUCT_CATEGORIES } from "./types";
>>>>>>> d892363 (create purchase, create product)
import express, { Request, Response} from 'express';
import cors from 'cors';
import { PRODUCT_CATEGORIES } from "./types";


const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})


app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200)
        res.send(getAllUsers())
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


app.get("/products", (req: Request, res: Response) => {
    try{
        res.status(200)
        res.send(getAllProducts())
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


app.get("/product/search", (req: Request, res: Response) => {
    try {
        const busca = req.query.q as string
        if(busca.length < 1) {
            throw new Error (" O campo de busca esta vazio.")
        }
        res.status(200)
        res.send(queryProductByName(busca))
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }  
})


app.post("/users", (req: Request, res: Response) => {
    try{
        const {id, email, password} = req.body

        if (typeof id !== "string" || id.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof email !== "string" || email.length < 4 || !email.includes("@") || !email.includes(".")) {
            throw new Error ("O e-mail inválido.")
        }
        if (typeof password !== "string") {
            throw new Error ("A senha  é inválida.")
        }

        const userExists = getUserById(id)
        if (userExists) {
            throw new Error("O usuário já existe")
        }

        const newUser = createUser(id, email, password)
        res.status(201)
        res.send(newUser)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }   
})
app.post("/products"), (req: Request, res: Response) => {
    try{
        const {id, name, price, category} = req.body
        if (typeof id !== "string" || id.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof name !== "string" || name.length < 1) {
            throw new Error ("O nome precisa ser mais de 1 caracter e ser string")
        }
        if (typeof price !== "number" || price < 0) {
            throw new Error ("O preço precisa ter valor maior que R$: 0,00")
        }
        const newProduct = createProduct(id, name, price, category)
        res.status(201)
        res.send(newProduct)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }   
}

app.post("/purchase"), (req: Request, res: Response) => {
    try{
        const {userId, productId, quantity, totalPrice} = req.body
        if (typeof userId !== "string" || userId.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof productId !== "string" || productId.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        const newPurchase = createPurchase(userId, productId, quantity, totalPrice)
        res.status(201)
        res.send(newPurchase)

    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }   
}

app.put("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const newPassword = req.body.password as string | undefined
    const newEmail = req.body.email as string | undefined
    const user = users.find((user) => user.id === id)

    if(user) {
        user.id = user.id
        user.password = newPassword || user.password
        user.email = newEmail || user.email

        console.log("user updated: ", user)
        res.status(200).send("atualizado!")
    } else {
        res.status(400).send("nao encontrado!")
    }
})

<<<<<<< HEAD
app.put("/products/:id", (req: Request, res: Response) => {
=======




app.delete("/users/:id", (req: Request, res: Response) => {
>>>>>>> d892363 (create purchase, create product)
    const id = req.params.id

    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as PRODUCT_CATEGORIES | undefined
    
    const product = products.find((product) => product.id === id)

    if(product) {
        product.id = product.id
        product.name = newName || product.name
        product.price = newPrice || product.price
        product.category = newCategory || product.category
        res.status(200).send("atualizado!")
    } else {
        res.status(400).send("nao encontrado!")
    }  
})

app.get("/products/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const result = getProductById(id)
    res.status(200).send(result)
})

app.get("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const result = getUserById(id)
    res.status(200).send(result)
})

app.get("/purchases/:userId", (req: Request, res: Response) =>{
    const id = req.params.userId
    const result = purchases.find((purchase) => purchase.userId === id)
    res.status(200).send(result)
})

app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const userId = users.findIndex((user) => user.id === id )
    if (userId >=0) {
        users.splice(userId, 1)
        res.status(200).send("Deletado")   
    } else {
        res.status(400).send("nao encontrado!")
    }
})

app.delete("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const productId = products.findIndex((product) => product.id === id)
    if(productId >=0) {
        products.splice(productId, 1)
        res.status(200).send("Deletado")
    } else {
        res.status(400).send("nao encontrado!")
    }
})


<<<<<<< HEAD
=======

>>>>>>> 8b20210 (get all users, get all products and create user validations)
