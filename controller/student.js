import student from '../Models/student.js';
// creating a student
export const createStudent = async(req,res)=>{
    try {
       const data = await student.create({...req.body});
       res.status(201).json(data)
    } catch (error) {
       console.log("Error",error)
       res.status(500).json({message:"Internal server error"})
    }
 }
// assigning or changing mentor to a particular student
export const assignMentor = async(req,res)=>{
   const {id} = req.params
   const value = req.body
  try {
   const data = await student.findByIdAndUpdate(id,{mentorsAssigned:value})
   if(value > value[0]){
   return res.status(404).json({
      error:"Unable to add multiple mentors to single student",
   });
  }
  if(data.mentorsAssigned > data.mentorsAssigned[0]){
   return res.status(201).json({message:"Student is already assinged to a mentor"});
  }
   res.status(201).json({message:data});
  } catch (error) {
   console.log("Error",error)
   res.status(500).json({message:"Internal server error"})
  }
}