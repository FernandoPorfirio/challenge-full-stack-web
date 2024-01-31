import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import Student from '../student/student.model'
import EnrolmentStatus from '../enrolmentStatus/enrolmentStatus.model'
import Class from '../class/class.model'

export interface IEnrolment {
  id?: number
  name: string
  date: Date
}

@Entity('enrolment')
export default class Enrolment extends BaseEntity implements IEnrolment {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'date' })
  date: Date

  @ManyToOne(() => Class, (classs) => classs.enrolment)
  @JoinColumn({
    name: 'class_id'
  })
  classs: Class

  @ManyToOne(() => EnrolmentStatus, { eager: true })
  @JoinColumn({ name: 'status_id' })
  enrolmentStatus: EnrolmentStatus

  @ManyToOne(() => Student, (student) => student.enrolment)
  @JoinColumn({
    name: 'student_id'
  })
  student: Student
}
