import mongoose, { model } from "mongoose";
//student schema
const studentSchema = new mongoose.Schema({
    Student_name:{
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
    mentorsAssigned:{
        type:[mongoose.Types.ObjectId],
        ref:"mentors",
     },
});
//collection name as students
export default model('students',studentSchema)