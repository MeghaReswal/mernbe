import express from "express"
import mongoose from "mongoose"
import usersRoute from "./routes/users.route.js"
import {findInDb} from "./database.js"
import  cors from "cors"
const URL = process.env.ECOMM_DB || 'mongodb://localhost:27017/e-comm' ;

const PORT = process.env.PORT || 2000;

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


app.listen(PORT, async () => {
    connect()
    console.log("connected")
})