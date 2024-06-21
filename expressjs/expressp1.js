const express=require('express')
const app=express()
const PORT=3001

// app.get("/",function(req,res){
//     res.send("Hello World")
// })
app.get("/api",function(req,res){
    res.json({message:"Hello from API"})
    })
    app.listen(PORT,function(){
        console.log(`Server is running on port ${PORT}`)
        })