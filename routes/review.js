
const express= require("express");
const router=express.Router({mergeParams:true});
const review=require("../models/review.js");
const reviewSchema=require("../schemavalidation/reviewSchema.js");
const ExpressError=require("../utils/expressError.js");
const wrapAsync=require("../utils/wrapAsync.js");
const listing=require("C:/Users/Jayant Deepak/OneDrive/Desktop/majorProject/models/listing.js");
const reviewController=require("../controllers/reviews.js");



  // add review route

router.post("/" ,wrapAsync(reviewController.addReview))

    //  delete review route
    router.delete("/:reviewId",wrapAsync(reviewController.deleteReview));

    module.exports=router

