var express=require('express')
var app=express()
app.use(function(req,res,next){
    //console.log('Time:',Date.UTC)
    console.log("%s%s",req.method,req.url)
    next()

})
app.get("/",function(req,res,next){
    res.send("Welcome to my home page")
})
app.get("/help",function(req,res,next){
    res.send("Welcome to my help page")


}).listen(3001);
console.log("Server is Running...")