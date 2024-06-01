const express= require("express");
const router=express.Router({mergeParams:true});
const listing=require("C:/Users/Jayant Deepak/OneDrive/Desktop/majorProject/models/listing.js")
const wrapAsync=require("../utils/wrapAsync.js");
const listingSchema=require("../schemavalidation/listingschema.js");
const ExpressError=require("../utils/expressError.js");
const multer=require("multer")
const {storage}=require("../cloudconfig.js")
const upload=multer({storage})
const listingController= require("../controllers/listings.js")


//  index route
router.get("/",wrapAsync(listingController.index))

 // new route
 router.get("/new",listingController.renderNewForm)
 
//  add route
 router.post("/add",upload.single("image"),wrapAsync(listingController.addNewlisting));
//  router.post("/add",upload.single("image"),(req,res)=>{console.log(req.body)
// res.send(req.file)}
//  )
  // edit route
   router.get("/:id/edit",wrapAsync(listingController.editThislisting))
 
 // update route
router.put("/:id",upload.single("image"),wrapAsync(listingController.updateThislisting));
 
 // show route 
 router.get("/:id",wrapAsync(listingController.showThislisting));
 
  // delete route
  router.delete("/:id",wrapAsync(listingController.deleteThislisting))


    module.exports=router;