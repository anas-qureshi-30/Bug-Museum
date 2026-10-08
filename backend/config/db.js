const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONOGO_URI);
        console.log("Successfully connected data")
    }catch(error){
        console.log("Error",error)

    }
}
module.exports=connectDB