const express = require("express")
const axios= require("axios")
const mongoose=require("mongoose")
const cors= require("cors")
const router=require("./routes/Router")


const app= express()

app.use(cors())
app.use(express.json())

app.use("/todo",router)

mongoose.connect("mongodb://localhost:27017").then(()=>console.log("database connected"))
app.listen(5000,()=>{console.log("server started")})


