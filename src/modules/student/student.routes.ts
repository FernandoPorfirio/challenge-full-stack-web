import express from 'express'
import Controller from './student.controller'
// import auth from '../middlewares/auth'
// import * as accessControl from "../middlewares/accessControl"

const router = express.Router()
const StudentController = new Controller()

router.post("/", StudentController.createStudent.bind(StudentController));
router.get("/", StudentController.getAllStudent.bind(StudentController));
router.get("/:id", StudentController.getSingleStudent.bind(StudentController));
router.put("/:id", StudentController.updateStudent.bind(StudentController));
router.delete("/:id", StudentController.deleteStudent.bind(StudentController));

export default router
