require("dotenv").config()

const path=require("path")
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
const port=process.env.PORT || 5000
const mongoUri=process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio"
const frontendDir=path.join(__dirname,"..","frontend")

app.use(express.json())
app.use(cors())
app.use(express.static(frontendDir))

mongoose.connection.on("connected",()=>{
console.log("MongoDB connected")
})

mongoose.connection.on("error",error=>{
console.error("MongoDB connection error:",error.message)
})

mongoose.connect(mongoUri).catch(error=>{
console.error("Initial MongoDB connection failed:",error.message)
})

const contactSchema=new mongoose.Schema({
name:{type:String,required:true,trim:true},
email:{type:String,required:true,trim:true},
message:{type:String,required:true,trim:true}
},{timestamps:true})

const Contact=mongoose.model("Contact",contactSchema)

app.get("/api/health",(req,res)=>{
res.json({
ok:true,
databaseReady:mongoose.connection.readyState===1
})
})

app.post("/api/contact",async(req,res)=>{
const {name,email,message}=req.body

if(!name || !email || !message){
return res.status(400).json({message:"Name, email, and message are required."})
}

if(mongoose.connection.readyState!==1){
return res.status(503).json({
message:"Database is not connected yet. Please try again in a moment."
})
}

try{
await Contact.create({
name:name.trim(),
email:email.trim(),
message:message.trim()
})

return res.json({
message:"Message sent successfully.",
savedToDatabase:true
})
}catch(error){
console.error("Contact form error:",error)
return res.status(500).json({
message:"Message failed to send. Please try again in a moment."
})
}
})

app.use((req,res)=>{
res.sendFile(path.join(frontendDir,"index.html"))
})

app.listen(port,()=>{
console.log(`Server running on http://localhost:${port}`)
})
