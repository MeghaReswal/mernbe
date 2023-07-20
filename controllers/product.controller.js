import Product from "../model/product.js";



export const getAllProducts = async (req, res) => {
    let products;
    try {
        products = await Product.find()
        res.status(200).json({
            success: true,
            message: 'success!',
            data: products
        })
        if (!products) {
            return res.status(404).json({ message: "no product find" });
        }
    } catch (error) {
        console.log('err in get product controller:', error)
        res.status(201).json({
            success: false,
            message: error.response
        })
    }


    // return res.status(200).json({ users })
}



export const createProduct = async (req, res) => {
    const { body } = req

    res.send("from createProduct controller")

} 


export const addToCart = async (req, res) => {
    const { body } = req

    res.send("from addToCart controller")

} 