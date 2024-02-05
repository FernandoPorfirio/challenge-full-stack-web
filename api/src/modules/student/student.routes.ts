import express from 'express'
import Controller from './student.controller'
import * as accessControl from "../../shared/middleware/accessControl";

const router = express.Router()
const StudentController = new Controller()

router.post("/",accessControl.createStudent, StudentController.createStudent.bind(StudentController));
router.get("/",accessControl.getAllStudent, StudentController.getAllStudent.bind(StudentController));
router.get("/:id",accessControl.getSingleStudent, StudentController.getSingleStudent.bind(StudentController));
router.put("/:id",accessControl.updateStudent, StudentController.updateStudent.bind(StudentController));
router.delete("/:id",accessControl.deleteStudent, StudentController.deleteStudent.bind(StudentController));

export default router
