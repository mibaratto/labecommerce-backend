import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName } from "./database";
import { PRODUCT_CATEGORIES } from "./types"
import express, { Request, Response} from 'express'
import cors from 'cors';


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

    res.status(200)
    res.send(queryProductByName(busca))
})

// console.log("Usuarios", users, "Produtos", products, "Compras", purchases)


// console.log(createUser("004", "beltrano@email.com", "beltrano99"))

// console.log(getAllUsers())

// console.log(createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORIES.ELECTRONICS))

// console.log(getAllProducts())

// console.log("Produto por ID", getProductById("1002"))

// console.log("Produto por Nome",queryProductByName("bolsa"))

