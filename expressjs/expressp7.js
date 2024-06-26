var express=require('express')
var cookieparser=require('cookie-parser')
var app=express()

app.use(cookieparser)

app.get('/cookieset',function(req,res){
    res.cookie('cookie_name','cookie_value')
    res.send('Cookie has been set')
    
})

app.get("/cookieget",function(req,res){
    var cookie=req.cookies
    res.send(cookie)
}).listen(3001)

console.log("Server is Running.,")

