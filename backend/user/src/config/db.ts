import mongoose from "mongoose";

export const connectDB = async()=>{
    const uri = process.env.MONGO_URI;
    if(!uri) throw new Error("MONGO URI is not derived in the environment variable");
    
   try {
       await mongoose.connect(uri,{
        dbName : 'userdbconversation'
    });
    console.log('MongoDB is Connected');
    
   } catch (error) {
     console.error('Failed to connect to mongodb : ',error);
     process.exit(1);
   }
};