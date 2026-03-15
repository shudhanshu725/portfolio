const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")

const contactSchema=new mongoose.Schema({

name:String,
email:String,
message:String

})

const Contact=mongoose.model("Contact",contactSchema)

app.post("/api/contact",async(req,res)=>{

const message=new Contact(req.body)

await message.save()

res.json({message:"saved"})

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})