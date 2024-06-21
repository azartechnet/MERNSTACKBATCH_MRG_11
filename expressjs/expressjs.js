const express=require('express')
const app=express()
//const PORT=3001

app.get("/",function(req,res){
    res.send("Hello World")
}).listen(3001)
console.log("Server is Running..")