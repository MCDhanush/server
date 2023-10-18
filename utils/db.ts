import mongoose from "mongoose";
require("dotenv").config()

// asusual we connect monogdb in this s6
const dbUrl:string=process.env.DB_URL ||"";

// same concept but different method on this we use try,catch s7
const connectDB = async ()=>{
    try{
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Databse is connected ${data.connection.host}`);
            
        })
    }catch(error:any){
      console.log(error.message)
      setTimeout(connectDB,5000)
    }
}

export default connectDB