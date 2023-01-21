const express=require("express")
const router=express.Router()
const controller=require("../controller/Control")

router.get("/showdata",controller.showdata)
router.post("/postdata",controller.createData)
router.put("/putdata/:id",controller.editData)
router.delete("/deldata/:id",controller.delData)

module.exports=router;