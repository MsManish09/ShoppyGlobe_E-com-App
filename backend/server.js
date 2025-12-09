
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


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