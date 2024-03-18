import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectionString = process.env.MONGO_URL

// db connection
export function dbConnection() {
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(connectionString);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting database",error);
    }
}


