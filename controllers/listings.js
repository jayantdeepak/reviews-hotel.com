const listing=require("../models/listing");
const ExpressError=require("../utils/expressError.js");
process.loadEnvFile()
const mbxGeocoding= require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken= process.env.MAP_TOKEN
const geocodingClient=mbxGeocoding({accessToken:mapToken})



module.exports.index=async (req,res)=>{
    let allListings= await listing.find({});
      res.render("./listing/index.ejs",{allListings})};




       // -----------------------------------
      module.exports.renderNewForm=(req,res)=>{
        if(!req.isAuthenticated()){
          req.flash("error","you must be logged in to create new listing")
          res.redirect("/login")
        }
        else{res.render("./listing/new.ejs")}}






        // -------------------------------------------------

        module.exports.addNewlisting=async (req,res)=>{
         let url= req.file.path;
         let filename=req.file.filename;

         console.log(url,".........",filename)

            let result=listingSchema.validate(req.body);
            let{title,description,price,country,location}=req.body;
            if(result.error){console.log(result.error)
              throw new ExpressError(404,result.error.message)}
              let Listing= new listing({
                title:title,
                description:description,
                price:price,
                country:country,
                location:location,
              });
              Listing.owner=req.user._id
              Listing.image={url,filename}
               await Listing.save();
               req.flash("success","new listing created")
                res.redirect("/listings");
              console.log(Listing)};


// --------------------------------------------------------------------------

              module.exports.editThislisting=async(req,res)=>{
                if(!req.isAuthenticated()){
                req.flash("error","you must be logged in to edit listing")
                res.redirect("/login")
              }
              let {id}= req.params;
              let templisting= await listing.findById(id)
              if( !templisting.owner.equals(res.locals.currUser._id)){
                req.flash("error","you do not have permission to edit");
               return res.redirect(`/listings/${id}`)
              }
                 
                 let foundlisting= await listing.findById(id);
                 console.log(foundlisting);
                 res.render("./listing/edit.ejs",{foundlisting})
               }
              //  -----------------------------------------------------------------------

               module.exports.updateThislisting=async(req,res)=>{
                     {if(!req.isAuthenticated()){
                 req.flash("error","you must be logged in to create new listing")
                 res.redirect("/login")}};

                let {id}= req.params;
                let newlisting=req.body;
                if(req.file){let url= req.file.path;
                  let filename=req.file.filename;
                  newlisting.image={url,filename}
                }
                console.log(newlisting)
           
                let result=listingSchema.validate(newlisting);
                if (result.error){throw new ExpressError(404,result.error.message)}
                let templisting=await listing.findById(id)
                
             if( !templisting.owner.equals(res.locals.currUser._id)){
               req.flash("error","you do not have permission to edit");
              return res.redirect(`/listings/${id}`)
             }
               let updatedListing=await listing.findByIdAndUpdate(id,newlisting,{new:true});
                console.log(updatedListing);
                req.flash("success", "listing updated")
                res.redirect(`/listings/${id}`)
             }
            //  ----------------------------------------------------------------------------------

             module.exports.showThislisting=async (req,res)=>{
                const {id} = req.params;
                const Listing= await listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
                console.log(Listing)
                const Location=Listing.location
               let response= await geocodingClient.forwardGeocode({
                  query: Location,
                  limit: 1
                })
                  .send();
                  
              const match = response.body;

                  console.log(match.features[0].geometry.coordinates)
               let cordinates=match.features[0].geometry.coordinates
               

              res.render("listing/show.ejs",{Listing,mapToken,cordinates})}
              // =====================================================================================


              
              module.exports.deleteThislisting=async(req,res)=>{
                if(!req.isAuthenticated()){
                req.flash("error","you must be logged in delete listing")
                res.redirect("/login")
              }
              let {id}= req.params;
              let templisting= await listing.findById(id);
              if( !templisting.owner.equals(res.locals.currUser._id)){
                req.flash("error","you do not have permission to delete");
               return res.redirect(`/listings/${id}`)
             }
                let deletedlisting=await listing.findByIdAndDelete(id)
                req.flash("success","listing deleted")
                res.redirect("/listings");
                console.log(deletedlisting)}
                // ----------------------------------------------------------------------------------