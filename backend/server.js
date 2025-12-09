
import express from 'express'
import mongoose from 'mongoose'


const app = new express()

// connect with mongoDB-Atlas 
mongoose.connect('mongodb+srv://shoppyGlobeDB:U82GAJGjDD5rZjcO@cluster0.i3bheai.mongodb.net/')

    // db connection comformation
    const db = mongoose.connection

        db.on('open', ()=>{
            console.log('DB is connnected')
        })
        db.on('error', ()=>{
            console.log('DB connnection failed')
        })


app.listen(8080, (req, res)=>{
    console.log('Server is live...')
})