import express from 'express'
import { mentorStudents, previousMentor} from "../controller/mentor.js";
import { createMentor } from "../controller/mentor.js";
import { assignMentor} from '../controller/student.js';
import { createStudent } from '../controller/student.js';
import { assignStudent } from '../controller/mentor.js';

// using router
const router = express.Router();

// student mentor routes

router.post('/mentor/create',createMentor)
router.post("/student/create",createStudent)
router.put("/assignstudent/:id",assignStudent)
router.put("/assignmentor/:id",assignMentor)
router.get('/mentor/student/:id',mentorStudents)
router.get('/mentor/previous/:id',previousMentor)

export default router