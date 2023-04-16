import { users, products, getAllUsers, createUser, createProduct, getAllProducts, getProductById, queryProductByName, createPurchase, getPurchasesByUserId, getUserByEmail, getUserById } from "./database";
import { PRODUCT_CATEGORIES, TPurchase } from "./types";
import express, { Request, Response} from 'express';
import cors from 'cors';
import { db } from "./database/knex";

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})


app.get("/users", async (req: Request, res: Response) => {
    try {
        res.status(200)
        const result = await db.raw(`
	        SELECT * FROM users;
        `)
        res.send(result)
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


app.get("/products", async (req: Request, res: Response) => {
    try{
        res.status(200)
        const result = await db.raw(`
	        SELECT * FROM products;
        `)
        res.send(result)
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


app.get("/product/search", async (req: Request, res: Response) => {
    try {
        const busca = req.query.q as string
        if(busca.length < 1) {
            throw new Error (" O campo de busca esta vazio.")
        }

        console.log(busca)

        const result = await db.raw(`
            SELECT * FROM products 
            WHERE name = "${busca}";
        `)

        res.status(200)
        res.send(result)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


app.post("/users", (req: Request, res: Response) => {
    try{
        const id = req.body.id as string | undefined
        const email = req.body.email as string | undefined
        const password = req.body.password as string | undefined

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
            throw new Error("O usuário já existe com este id")
        }

        const emailExists = getUserByEmail(email)
        if (emailExists) {
            throw new Error("O usuário já existe com este email")
        }

        const newUser = createUser(id, email, password)
        res.status(201)
        res.send(newUser)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.post("/products", (req: Request, res: Response) => {
    try {
        const id = req.body.id as string | undefined
        const name = req.body.name as string | undefined
        const price = req.body.price as number | undefined
        const category = req.body.category as PRODUCT_CATEGORIES | undefined

        if (typeof id !== "string" || id.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof name !== "string" || name.length < 1) {
            throw new Error ("O nome precisa ser mais de 1 caracter e ser string")
        }
        if (typeof price !== "number" || price < 0) {
            throw new Error ("O preço precisa ter valor maior que R$: 0,00")
        }
        if (category !== PRODUCT_CATEGORIES.ACCESSORIES &&
            category !== PRODUCT_CATEGORIES.CLOTHES_AND_SHOES &&
            category !== PRODUCT_CATEGORIES.ELECTRONICS) {

                throw new Error ("Categoria inválida")
        }

        const productExists = getProductById(id)
        if(productExists) {
            throw new Error("O produto já existe com este id")
        }

        const newProduct = createProduct(id, name, price, PRODUCT_CATEGORIES.ACCESSORIES)
        res.status(201)
        res.send(newProduct)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.post("/purchase", (req: Request, res: Response) => {
    try{
        const {userId, productId, quantity, totalPrice} = req.body
        if (typeof userId !== "string" || userId.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof productId !== "string" || productId.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof quantity !== "number" || quantity < 1 || !Number.isInteger(quantity)) {
            throw new Error ("A quantidade precisa ser um número inteiro maior do que 0")
        }

        const newPurchase = createPurchase(userId, productId, quantity, totalPrice)
        res.status(201)
        res.send(newPurchase)

    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.put("/users/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const newEmail = req.body.email as string | undefined
        const newPassword = req.body.password as string | undefined

        if (typeof id !== "string" || id.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof newEmail !== "string" || newEmail.length < 1) {
            throw new Error ("O email precisa ter mais de 1 caracter")
        }
        if (typeof newPassword !== "string" || newPassword.length < 1) {
            throw new Error ("O password precisa ter mais de 1 caracter")
        }

        
        const user = getUserById(id)
        if(!user) {
            throw new Error("não encontrado")
        }

        user.id = user.id
        user.password = newPassword || user.password
        user.email = newEmail || user.email

        res.status(200).send("atualizado!")
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const userIndex = users.findIndex((user) => user.id === id )
        if (userIndex > 0) {
            users.splice(userIndex, 1)
            res.status(200).send("DEletado")   
        } else {
            throw new Error("nao encontrado!")
        }
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.get("/users/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const result = getUserById(id)
    res.status(200).send(result)
})

app.get("/products/:id", (req: Request, res: Response)=> {
    try {
        
        const id = req.params.id
        console.log("id", id)

        const product = getProductById(id)
        if (!product) {
            throw new Error("produto não encontrado")
        }

        res.status(200).send(product)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.body.id as string | undefined
        const name = req.body.name as string | undefined
        const price = req.body.price as number | undefined
        const category = req.body.category as PRODUCT_CATEGORIES | undefined

        if (typeof id !== "string" || id.length < 1) {
            throw new Error ("O id precisa ser mais de 1 caracter e ser string")
        }
        if (typeof name !== "string" || name.length < 1) {
            throw new Error ("O nome precisa ser mais de 1 caracter e ser string")
        }
        if (typeof price !== "number" || price <= 0) {
            throw new Error ("O preço precisa ter valor maior que R$: 0,00")
        }
        if (category !== PRODUCT_CATEGORIES.ACCESSORIES &&
            category !== PRODUCT_CATEGORIES.CLOTHES_AND_SHOES &&
            category !== PRODUCT_CATEGORIES.ELECTRONICS) {

                throw new Error ("Categoria inválida")
        }

        const product = getProductById(id)
        if(!product) {
            throw new Error("não encontrado")
        }

        product.id = id
        product.name = name || product.name
        product.category = category || product.category
        product.price = price || product.price

        res.status(200).send("atualizado!")
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const productIndex = products.findIndex((product) => product.id === id )
        if (productIndex > 0) {
            products.splice(productIndex, 1)
            res.status(200).send("DEletado")
        } else {
            throw new Error("nao encontrado!")
        }
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

app.get("/purchase/:userId", (req: Request, res: Response)=> {
    try {
        const userId = req.params.userId

        if (!getUserById(userId)) {
            throw new Error("usuário não existe")
        }

        const purchases: TPurchase[] = getPurchasesByUserId(userId)
        res.status(200).send(purchases)
    } catch(error: any) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

