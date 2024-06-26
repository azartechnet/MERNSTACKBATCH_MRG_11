const express=require('express')
const app=express()
const PORT=3001

app.use(express.urlencoded({extended:true}))

app.post("/",function(req,res){
    console.log("request received")
    let name = req.body.name;
    if(!name) return res.send("Name is required");
    // Simple validation
    if(name.length<4)
    return res.send(`Name should have at least 4 characters`)
// Store the data in a variable called 'data' and send it back to the
// client as JSON using the end method
let data={
    id :1 ,
    value:"Hello World" + " " + name
    }
    console.log(JSON.stringify(data))
    res.end(JSON.stringify(data));
    }).listen(PORT)