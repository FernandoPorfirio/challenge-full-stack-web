import { Request, Response } from 'express'

import Student from './student.model'
import {
  CreateStudentValidator,
  UpdateStudentValidator
} from './student.validator'

export default class StudentController {
  public async createStudent(req: Request, res: Response) {
    await CreateStudentValidator(req.body)

    const student: Student = new Student()
    student.name = req.body.name
    student.email = req.body.email
    student.cpf = req.body.cpf
    student.birthdate = req.body.birthdate
    student.whatsappNumber = req.body.whatsappNumber
    student.contactNumber = req.body.contactNumber
    student.street = req.body.street
    student.number = req.body.number
    student.city = req.body.city
    student.state = req.body.state
    student.neighborhood = req.body.neighborhood
    student.zip_code = req.body.zip_code

    await student.save()

    return res.status(200).json(student)
  }

  public async getSingleStudent(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10)
    const student = await Student.find({ where: { id, actived: true } })
    return res.status(200).json(student)
  }

  public async getAllStudent(req: Request, res: Response) {
    const student = await Student.find({ where: { actived: true } })
    return res.status(200).json(student)
  }

  public async updateStudent(req: Request, res: Response) {
    await UpdateStudentValidator(req.body)

    const id: number = parseInt(req.params.id, 10)

    const student = await Student.findOneBy({ id })

    student.name = req.body.name
    student.email = req.body.email
    student.birthdate = req.body.birthdate
    student.whatsappNumber = req.body.whatsappNumber
    student.contactNumber = req.body.contactNumber
    student.street = req.body.street
    student.number = req.body.number
    student.city = req.body.city
    student.state = req.body.state
    student.neighborhood = req.body.neighborhood
    student.zip_code = req.body.zip_code

    await student.save()

    return res.status(200).json(student)
  }

  public async deleteStudent(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10)

    const student = await Student.findOneBy({ id })

    student.actived = false

    await student.save()

    return res.status(200).json(student)
  }
}
