import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
    const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};



    



export default connectDB;



// const connectDB = async ()=>{
//     try {
//         mongoose.connection.on('connected', ()=> console.log
//         ("Database Connected"))
//         await mongoose.connect(`${process.env.MONGODB_URI}/AkinzoBlogDB`)
//     } catch (error) {
//         console.log(error.message)
//     }
// }