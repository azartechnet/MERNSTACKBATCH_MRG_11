const express=require('express')
const app=express();
const PORT=3001;
app.get("/",(req,res)=>{
    res.send(
        `<div>
        <h2>Welcome to the Application</h2>
        </div>`
    )
}).listen(PORT)
console.log("Server is Running..")