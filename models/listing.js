const mongoose=require("mongoose");
const review=require("./review.js")
const { schema, type } = require("../schemavalidation/listingschema.js");
const { ref } = require("joi");
const Schema = mongoose.Schema;



let listingSchema= mongoose.Schema(
    {title:{type:String,
        required:true},
        description:String,
        image:{url:String,
        filename:String},
        name:String,
        price:Number,
        
        location:String,
        country:String,
        reviews:[
            { 
            type:Schema.Types.ObjectId,
            ref:"review"
               
            }
        ],
        owner:{ type:Schema.Types.ObjectId,
       ref:"user"}
});

listingSchema.post("findOneAndDelete",async(data)=>{
    if(data){ await review.deleteMany({_id:{$in:data.reviews}})}
})

const listing=mongoose.model("listing",listingSchema);

module.exports= listing;

