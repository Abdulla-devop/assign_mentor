import mongoose from "mongoose";
const connectingString = 
"mongodb+srv://Abdulla:Abdulla27@mentorassign.q1jkbft.mongodb.net/"

// db connection
export function dbConnection() {
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(connectingString);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting database",error);
    }
}


