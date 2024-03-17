import mongoose, { model } from "mongoose";
//Mentor schema

const mentorSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    Mentorname:{
             type:String,
             required:true,
    },
    batch:{
        type:String,
        required:true
    },
    language:{
           type:String,
           required:true
    },
    studentAssigned:{
        type: [mongoose.Types.ObjectId], 
        ref:'students'
    }

});
//collection name as mentors
export default model('mentors',mentorSchema)

