const User=require("../models/user")
const passport = require("passport");

module.exports.signup=async(req,res)=>{
    try{ let{username,email,password}=req.body;
    let  newUser=new User({email,username});
    let registeredUser =await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{if(err){return next(err)}
    req.flash("success","welcome")
    res.redirect("/listings")
})
}catch(e){
        req.flash("error",e.message)
        res.redirect("/signup")
    }}


    module.exports.renderLoginform=(req,res)=>{
        res.render("users/login.ejs")
    }


    module.exports.renderSignupform=(req,res)=>{
        res.render("users/signup.ejs")
    }

   module.exports.isloggedin=
   async(req,res)=>{
       req.flash("success","welcome back to wonderlust!")
       res.redirect("/listings")
   }
    
    
   

    module.exports.userLogout=(req,res)=>{
        req.logout((err)=>{if(err){next(err)}
         req.flash("success","you are logged out")   
         res.redirect("/listings")
        })
    }