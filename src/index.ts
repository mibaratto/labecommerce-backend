import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName } from "./database";
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
    res.status(200)
    res.send(getAllUsers())
})

app.get("/products", (req: Request, res: Response) => {
    res.status(200)
    res.send(getAllProducts())
})

app.get("/product/search", (req: Request, res: Response) => {
    const busca = req.query.q as string
    //const {q} = req.query
    res.status(200)
    res.send(queryProductByName(busca))
})

app.post("/users", (req: Request, res: Response) => {
    const {id, email, password} = req.body
    if (typeof id !== "string") {
        return res.status(400).send("id tem que ser string")
    }

    const newUser = createUser(id, email, password)

    res.status(201)
    res.send(newUser)
})

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

app.put("/products/:id", (req: Request, res: Response) => {
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
    const result = users.find((user)=> user.id === id)
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


