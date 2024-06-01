// requiring packages
if(process.env.NODE_ENV !="production"){require("dotenv").config();}
process.loadEnvFile()


const express= require("express");
const app=express();
const mongoose=require("mongoose");
const path= require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/expressError.js");
const listingsrouter=require("./routes/listing.js")
const Reviewrouter=require("./routes/review.js");
const userrouter= require("./routes/user.js")
const session = require("express-session");
const flash= require("connect-flash");
const passport=require("passport");
const localstrategy=require("passport-local")
const User= require("./models/user.js");
const listing = require("./models/listing.js");

// using packages
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// making connection with mongoose
async function main(){await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')};
main()
.then(()=>{console.log('connection successful')})
.catch((err)=>{console.log(err)});


// sessions and cookie
const sessionOption={
  secret:"mysuperscrretcode",
  resave:false,
  saveUninitialized:true,
  cookie:{
expires: Date.now()+24*7*60*60*1000,
maxAge:24*7*60*60*1000,
httpOnly:true,
  }
}
// using flash and session
app.use(session(sessionOption));
app.use(flash());
 
app.use(passport.initialize())
app.use(passport.session());
passport.use(new localstrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// this middleware store flash message wherever the flash was generated


app.use((req,res,next)=>{
  res.locals.success=req.flash("success")
  res.locals.error=req.flash("error")
  res.locals.currUser=req.user
  next()

})

// route usage

  

  app.use("/listings",listingsrouter)
  app.use("/listings/:id/reviews",Reviewrouter)
  app.use("/",userrouter)
  

  // for any other page
  app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"))
  })
  
  // error handling middleware
  app.use((err,req,res,next)=>{
    let{statusCode=505,message="something went wrong"}=err;
    res.render("error.ejs",{err});
  })

//  for server 
app.get("/",(req,res)=>{res.send("root directory working")})
app.listen(3000,console.log("server is listining on port 3000"));