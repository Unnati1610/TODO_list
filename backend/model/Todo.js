const mongoose=require("mongoose")
const schema = mongoose.Schema

const TodoSchema=new schema({
    title:{type:String},
    desc:{type:String}
})

module.exports=mongoose.model("TodoSchema",TodoSchema)
