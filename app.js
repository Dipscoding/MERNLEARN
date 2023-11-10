const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const app = express();
const port = 5001


app.use(express.json())


app.use('/api',router)





mongoose.connect('mongodb://localhost:27017').then(()=>{
    app.listen(port,()=>{
        console.log(`database connected and i am listening to ${port}`);
    })
}).catch((err)=>console.log(err))




// app.use('/',(req,res,next)=>{
//     res.send("hello there")
 
// })

// app.listen(port,()=>{
//     console.log(`server started at port ${port}`);
// })