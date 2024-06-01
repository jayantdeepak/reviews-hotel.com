const mongoose=require("mongoose");
const initData=require("./data.js");
const listing=require("../models/listing.js");







async function main(){await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust')};
main()
.then(()=>{console.log('connection successful')})
.catch((err)=>{console.log(err)});

const initDb=async()=>{
    await listing.deleteMany({});
   initData.data= initData.data.map((obj)=>({...obj, owner:"662a23e63e3180f0896e4d82" }));
    await listing.insertMany(initData.data)
    console.log("data was initilalized")
}
initDb();
