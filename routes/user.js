const express= require("express");
const router=express.Router();
const User= require("../models/user");
const wrapAsync=require("../utils/wrapAsync.js");
const { error } = require("../schemavalidation/listingschema");
const passport = require("passport");
const userController=require("../controllers/users.js")




router.get("/signup",userController.renderSignupform)


router.post("/signup", wrapAsync(userController.signup))

router.get("/login",userController.renderLoginform)



router.post("/login",
passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),
userController.isloggedin);





router.get("/logout",userController.userLogout)
module.exports=router