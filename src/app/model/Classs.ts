import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Enrolment from './Enrolment'
import Course from './Course'

@Entity('classs')
class Classs {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @ManyToOne(() => Course, (course) => course.classs)
  @JoinColumn({
    name: 'course_id'
  })
  course: Course

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToMany(() => Enrolment, (enrolment) => enrolment.classs)
  enrolment: Enrolment[]
}

export default Classs
