
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import productsModel from './models/productsModel.js'
// import axios from 'axios'

import userModel from './models/userModel.js'

import router from './routes/routes.js'


// load environment variable
dotenv.config()

const app = new express()

app.listen(8080, (req, res)=>{
    console.log('Server is live...')
})

// connect with mongoDB-Atlas -> shoppyGlobe DB
mongoose.connect(process.env.MONGODB_URL)
.then( async()=>{ 
    console.log('DB is connected')

    // List of all collections in DB
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log("Collections:", collections.map(c => c.name))
})
.catch((err)=> console.log('DB Connnecton error', err))

// json middleware
app.use(express.json())  // to parse json obj

 
  // GET -> fetch products api
  app.use('/api/products', router)

  // userdb testing

