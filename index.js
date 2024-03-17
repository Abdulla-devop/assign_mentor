//importing express
import express from 'express'
import IndexRouter from './Routes/router.js'
import { dbConnection } from './db.js'


//Port
const Port = 6060

const app = express()

//middle wares
app.use(express.json())

//using router.js as indexrouter
app.use('/',IndexRouter)

//connecting db
dbConnection()

//port listening server
app.listen(Port,() => {
    console.log(`Server listening from port ${Port}` )
})
