import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
})


export const user = async (req, res) => {
    try {
        const product = mongoose.model("products", productSchema)
        const data = await product.find()
        console.log(data)

        res.status(200).json({
            success: true,
            message: 'success!',
            data: data
        })

    } catch (error) {
        console.log('err in getuser controller:', error)
        res.status(201).json({
            success: false,
            message: error.response
        })
    }

}

export const profile = async (req, res) => {
    res.send("from profile controller")
}

export const register = async (req, res) => {
    res.send("from register controller")
} 