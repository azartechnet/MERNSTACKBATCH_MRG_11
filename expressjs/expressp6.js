const express=require('express')
const app=express()
const PORT=3001;

//Multiple Routing

const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get("/",function(req,res){
    res.send("UserPage")
})
r2.get("/",function(req,res){
    res.send("AddUser")
})
r3.get("/",function(req,res){
    res.send("AdminPage")
})
app.use("/user",r1)
app.use("/add",r2)
app.use("/admin",r3)

app.listen(PORT,function(err){
   if(err)console.log(err)
   console.log("Server is running on port 3001")
})
