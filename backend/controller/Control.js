const TodoSchema=require("../model/Todo")

const showdata=async (req,res)=>{
    let getData;
    try {
        getData= await TodoSchema.find()
    } catch (error) {
        console.log(error)
    }
    if(!getData){
        res.status(404).json({
            msg:"Not found"
        })
    }
    else{
        res.status(201).json(getData)
    }
}

const createData= async(req,res)=>{
    const {title,desc}=req.body
    let postData;
    try {
         postData=new TodoSchema({title,desc})
         await postData.save()
    } catch (error) {
        console.log(error)
    }
    if(!postData){
        res.status(404).json({
            msg:"data not found"
        })
    }
    else{
        res.status(201).json(postData)
    }
}

const delData= async(req,res)=>{
     let data;
     let id=req.params.id
     try {
        data= await TodoSchema.findByIdAndRemove(id)
     } catch (error) {
        console.log(error)
     }
     if(!data){
        res.status(404).json({
            msg:"data not found"
        })
     }
     else{
        res.status(201).json({
            msg:"data delete successfully"
        })
     }
}

const editData= async(req,res)=>{
    const {title,desc}= req.body
    let upData;
    let id=req.params.id
    try {
        upData = await TodoSchema.findByIdAndUpdate(id,{title,desc})
        upData.save()
    } catch (error) {
        console.log(error)
    }

    if(!upData){
        res.status(404).json({
            msg:"not found"
        })
    }
    else{
        res.status(201).json(upData)
    }
}

exports.showdata=showdata
exports.createData=createData
exports.delData=delData
exports.editData=editData