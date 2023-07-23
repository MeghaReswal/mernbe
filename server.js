import express from "express"
import mongoose from "mongoose"
import usersRoute from "./routes/users.route.js"
import productsRoute from "./routes/products.route.js"
import {findInDb} from "./database.js"
import  cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const URL = process.env.MONGODB_CONNECT_URI  ;

const PORT = process.env.PORT || 2000;
console.log("process" ,process.env.MONGODB_CONNECT_URI)


const app = express()
app.use(cors())
// mogoose connection
const connect = async () => {
    try {
        await mongoose.connect(URL);
    } catch (error) {
        console.log(error)
    }
}

app.use("/api/users", usersRoute)
app.use("/api/products", productsRoute)


app.listen(PORT, async () => {
    connect()
    console.log("connected")
})