import { users, products, purchases, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName } from "./database";
//import { PRODUCT_CATEGORIES } from "./types";
import express, { Request, Response} from 'express';
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
    const user = users.find((user) => user.id === id)

    console.log("user found: ", user)
    console.log("id: ", id)
    console.log("new passwd: ", newPassword)

    if(user) {
        user.id = user.id
        user.password = newPassword || user.password

        console.log("user updated: ", user)
        res.status(200).send("atualizado!")
    } else {
        res.status(400).send("nao encontrado!")
    }
    
})

app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const userId = users.findIndex((user) => user.id === id )
    if (userId >=0) {
        users.splice(userId, 1)
        res.status(200).send("DEletado")   
    } else {
        res.status(400).send("nao encontrado!")
    }
})



app.get("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const result = users.find((user)=> user.id === id)
    res.status(200).send(result)
})





// export function createUser(id:string, email:string, password:string):string {
//     const newUser = {
//        id,
//        email,
//        password,
//     }
//    users.push(newUser)
//    return "Usuário cadastrado com sucesso!"
// }


// console.log("Usuarios", users, "Produtos", products, "Compras", purchases)


// console.log(createUser("004", "beltrano@email.com", "beltrano99"))

// console.log(getAllUsers())

// console.log(createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORIES.ELECTRONICS))

// console.log(getAllProducts())

// console.log("Produto por ID", getProductById("1002"))

// console.log("Produto por Nome",queryProductByName("bolsa"))

