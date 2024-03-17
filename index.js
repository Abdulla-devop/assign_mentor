//importing express
import express from 'express'
import IndexRouter from './Routes/router.js'
import { dbConnection } from './db.js'
import dotenv from "dotenv";

const app = express()

//env configuration
dotenv.config();

//Port
const PORT = process.env.PORT

//middle wares
app.use(express.json())

//using router.js as indexrouter
app.use('/',IndexRouter)

//connecting db
dbConnection()

//port listening server
app.listen(PORT,() => {
    console.log(`Server listening from port ${PORT}` )
})
