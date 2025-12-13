
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import productsModel from './models/productsModel.js'
// import axios from 'axios'

// import userModel from './models/userModel.js'

import router from './routes/routes.js'
import registrationRouter from './routes/userRegisterationRoute.js'

import cors from 'cors'
import loginRouter from './routes/userLoginAuthRouter.js'

import jwt from "jsonwebtoken"
import addToCartRouter from './routes/addToCartRouter.js'



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

// cors middlerware to all requests
app.use(cors())

// authentication verification middleware
function authentication(req, res, next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split( ' ')[1] // split JWT and secret

    // verify
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({message: 'Invalid jwt token'})
        }

        req.user = user

        // move to next 
        next()

    })
}

 
  // GET -> fetch products api
  app.use('/api/products', router)

  // Post -> add new user
  app.use('/signup', registrationRouter)

  // POST -> user login and authenticaltion
  app.use('/login', loginRouter)  

  //   POST -> Add items ot cart -> uses authentication middleware.
  app.use('/cart',authentication, addToCartRouter) 


