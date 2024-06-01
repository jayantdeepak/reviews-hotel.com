const review=require("../models/review")
const listing=require("../models/listing")
const ExpressError=require("../utils/expressError.js");


module.exports.addReview=async(req,res)=>{
    if(!req.isAuthenticated()){
      req.flash("error","you must be logged in to create new review")
      res.redirect("/login")
    }
      let {id} =req.params;
      let Listing= await listing.findById(id);
      let data=req.body;
     let result=  reviewSchema.validate(data)
     console.log(result);
     
     if (result.error){
      throw new ExpressError(404,result.error.message)
    }
     let newreview=new review(req.body);
     newreview.author=req.user
     
     Listing.reviews.push(newreview);
     await newreview.save(); 
     await Listing.save();
     req.flash("success","new review added")
     
     res.redirect(`/listings/${id}`)
       }



       module.exports.deleteReview=async(req,res)=>{
        if(!req.isAuthenticated()){
          req.flash("error","you must be logged delete review")
          res.redirect("/login")
        }
        let{id, reviewId}=req.params;
        let thisReview=await review.findById(reviewId);
        if(!thisReview.author.equals(res.locals.currUser._id)){
          req.flash("error","you are not author of this review")
          res.redirect(`/listings/${id}`);
        }else{let dsf=await review.findByIdAndDelete(reviewId);
          console.log(dsf)
          await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
          req.flash("success","review deleted")
          res.redirect(`/listings/${id}`);}
        
  
      }