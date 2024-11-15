import mongoose from "mongoose";

const dbConnect=async()=> {
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("mongodb connected successfully")
    } catch(error) {
        console.log("error connecting",error)
    }
}
export default dbConnect;