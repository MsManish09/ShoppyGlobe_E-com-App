
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// // import productModel
// import productsModel from './models/productsModel.js'
// import axios from 'axios'

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
 
  // GET -> fetch products api
  app.use('/api/products', router)

  // // GET -> fetch products by id
  //   app.use('/api/products/:id', router)
