const express=require('express')
const app=express()

app.all('/user',function(req,res,n1){
    console.log('user')
    n1()
}).listen(3001)

console.log("Server is Running..")