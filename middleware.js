 const listing=require("../majorProject/models/listing")
 
 
 let isLoggedin=(req,res,next)=>{if(!req.isAuthenticated()){
    req.flash("error","you must be logged in to create new listing")
    res.redirect("/login")
  }next()
}
module.exports=isLoggedin



module.exports.saveRedirectUrl=(req,res,next)=>{if(req.session.redirectUrl){
  req.locals.redirectUrl=req.session.redirectUrl
}next()}

 module.exports.isowner=async(req,res,next)=>{
  let {id}= req.params;
  let templisting= await listing.findById(id)
  if( !templisting.owner.equals(res.locals.currUser._id)){
    req.flash("error","you do not have permission to edit");
   return res.redirect(`/listings/${id}`)
 }}
