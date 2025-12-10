import axios from "axios";
import productsModel from "../models/productsModel.js";


// GET products : fetch from mongoDB,  if mongodb (shoppyGlobe -> products) is empty fetch form dummyAPI and store in shoppyGlobe mongodb and respond with the products array.
    export const fetchProducts =  async (req, res) => {
        try {

        // Check if products already exist in DB
        const existingCount = await productsModel.countDocuments();
        if (existingCount > 0) {
            const products = await productsModel.find()
            console.log('products exist')
            console.log(products)
            return res.json({ products });
        }

        // If DB empty → fetch from dummy API
        const apiResponse = await axios.get("https://dummyjson.com/products");
        const apiProducts = apiResponse.data.products; // array

        // Map API shape -> DB shape
        const docs = apiProducts.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            discountPercentage: p.discountPercentage,
            rating: p.rating,
            stock: p.stock,
            brand: p.brand,
            category: p.category,
            thumbnail: p.thumbnail,
            images: p.images,
            dimensions: {
            width: p.dimensions.width,
            height: p.dimensions.height,
            depth:  p.dimensions.depth
            }, 
            reviews: p.reviews
        }));

        // Insert many (because collection is empty, duplicates shouldn’t happen)
        await productsModel.insertMany(docs);

        // Return the saved docs
        const savedProducts = await productsModel.find().lean();
        res.status(200).json({ products: savedProducts });
        } 

        catch (err) {
        console.error("Error in /products:", err.message);
        res.status(500).json({ error: "Failed to get products" });
        }
}