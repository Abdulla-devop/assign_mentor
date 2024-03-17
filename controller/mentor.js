import mentors from '../Models/Mentor.js';
import student from '../Models/student.js';


 //creating Mentor
 export const createMentor = async(req,res)=>{
   try {
      const data = await mentors.create({...req.body});
      res.status(201).json({mentor:data})
   } catch (error) {
      console.log("Error",error)
      res.status(500).json({message:"Internal server error"})
   }
 }
 //assigning student to mentor
 export const assignStudent = async (req,res)=>{
   const {id} = req.params
    const data = req.body
   try {
    const mentor = await mentors.findByIdAndUpdate(id,{studentAssigned:data})
     res.status(201).json({message:mentor})
   } catch (error) {
      console.log("error",error)
    res.status(400).json({error:"Unable to connect"});
   }
}
//find the students assigned to a particular mentor
export const mentorStudents = async(req,res)=>{
   const {id} = req.params
   try {
      const data = await mentors.findById(id).populate("studentAssigned")
      res.status(200).json({message:data})
   } catch (error) {
      console.log("error",error)
      res.status(400).json({error:"Unable to connect"});
   }
}
// previous Mentor
export const previousMentor = async(req,res)=>{
   const {id} = req.params
   try {
      const studentData = await student.findById(id).populate('mentorsAssigned')
      const data = studentData.mentorsAssigned
      res.status(200).json({message:data})
   } catch (error) {
      console.log("error",error)
      res.status(500).json({message:"unable to connect"})
   }
}