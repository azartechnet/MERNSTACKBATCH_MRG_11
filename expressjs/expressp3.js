const express=require('express')
const app=express()
app.use(express.json())
app.post("/",(req,res)=>{
    const {name}=req.body;
    res.send(`Welcome to the Application ${name}`)
}).listen(3001)
console.log("Server is Rinning...")

