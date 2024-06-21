const express=require('express')
const app=express()
const PORT=3001

app.use(express.text())

// app.use(express.json())

app.post("/",function(req,res){
    //console.log(req.body.name)

    console.log(req.body)
    res.end()
}).listen(PORT)
console.log("Server is Running..")