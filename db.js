import mongoose from "mongoose";

// db connection
export function dbConnection() {
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting database",error);
    }
}


