const express=require('express')
const app=express()
const PORT=3001
//Single Rounting

const r1=express.Router()

r1.get('/',function(req,res){
    console.log("Rounting Working..")
    res.send(`<form>
    UserName:<input type='text'/>
    <input type='submit' value='Submit'/>
    </form>`)
})
app.use(r1)

app.listen(PORT,function(err){
    if(!err)console.log("Server is Running..")
})