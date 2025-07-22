import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // ✅ Good


const dbConnect = async () => {
    try {

        if (!process.env.DB_URL) {
            throw new Error("DB_URL is not defined in .env file");
        }
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected succesfully")

    } catch (error) {
        console.log(error.message);
    }
}


export default dbConnect;