import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connnectDB=async ()=>{
    try {
      const connnectionInstace=   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n Mogodb connected !! DB HOST: ${connnectionInstace}`) 
    } catch (error) {
        console.log("Mongodb connection error: ",error);
         process.exit(1);
    }
}

export default connnectDB;