import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import Student from './Student'
import Classs from './Classs'
import EnrolmentStatus from './EnrolmentStatus'

@Entity('enrolment')
class Enrolment {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'date' })
  date: Date

  @ManyToOne(() => Classs, (classs) => classs.enrolment)
  @JoinColumn({
    name: 'class_id'
  })
  classs: Classs

  @ManyToOne(() => EnrolmentStatus, { eager: true })
  @JoinColumn({ name: 'status_id' })
  enrolmentStatus: EnrolmentStatus

  @ManyToOne(() => Student, (student) => student.enrolment)
  @JoinColumn({
    name: 'student_id'
  })
  student: Student
}

export default Enrolment
