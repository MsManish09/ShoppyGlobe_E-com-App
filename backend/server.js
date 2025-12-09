
import express from 'express'

// connect with mongoDB Atlas

const app = new express()

app.listen(8080, (req, res)=>{
    console.log('Server is live...')
})