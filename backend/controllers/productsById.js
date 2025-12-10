import productsModel from "../models/productsModel.js";

export const fetchProductsByID =  async (req, res) => {

    const id = Number(req.params.id)

    const product = await productsModel.findOne({id})

    if(!product){
        console.log(`product with ID: ${id}, does not exist`)
        return res.status(404).json({error: `product with ${id} not found`})
    }

    console.log('Product: ', product)
    res.status(200).json(product);
}
