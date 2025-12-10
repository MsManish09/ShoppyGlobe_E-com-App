
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import productModel
import productsModel from './models/productsModel.js'
import axios from 'axios'


// load environment variable
dotenv.config()

const app = new express()

// connect with mongoDB-Atlas -> shoppyGlobe DB
mongoose.connect(process.env.MONGODB_URL)
.then( async()=>{ 
    console.log('DB is connected')

    // List of all collections in DB
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log("Collections:", collections.map(c => c.name))
})
.catch((err)=> console.log('DB Connnecton error', err))

/* 
    // db connection comformation
    const db = mongoose.connection

        db.on('open', ()=>{
            console.log('DB is connnected')
        })
        db.on('error', ()=>{
            console.log('DB connnection failed')
        })

*/

app.listen(8080, (req, res)=>{
    console.log('Server is live...')
})

/* 

// add new user using userModel
import userModel from './models/userModel.js'
const newUser = userModel({
  name: 'Manish',
  age: 25,
});

newUser.save()
  .then(result => {
    console.log('User saved:', result);
  })
  .catch(err => {
    console.error('Error saving user:', err);
  });
  
  */

  // GET products : fetch from mongoDB,  if mongodb (shoppyGlobe -> products) is empty fetch form dummyAPI and store in shoppyGlobe mongodb
  app.get("/products", async (req, res) => {
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
});