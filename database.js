import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
})

// for create a document in db
const saveInDb = async () => {
    try {
        const product = mongoose.model("products", productSchema);
        let data = new product({
            name: "t 20",
            price: 200,
            brand: "PQR"
        });
        const result = await data.save();
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

// for update a document in db
const updateInDb = async () => {
    try {
        const product = mongoose.model("products", productSchema);

        let data = await product.updateOne(
            { brand: "ABC" },
            {
                $set: { price: 900 }
            }
        )
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

// for delete a document in db
const deleteInDb = async () => {
    try {
        const product = mongoose.model("products", productSchema)

        const data = await product.deleteOne({ brand: "ABC" })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const findInDb = async () => {
    try {
        const product = mongoose.model("products", productSchema)
        const data = await product.find()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}






// export { saveInDb }
// export { updateInDb }
// export { deleteInDb }
export { findInDb }