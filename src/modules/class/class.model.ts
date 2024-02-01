import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  OneToMany
} from 'typeorm'

import Course from '../course/course.model'
import Enrolment from '../enrolment/enrolment.model'

export interface IClass {
  id?: number
  name: string
  createdAt: Date
}

@Entity('class')
export default class Class extends BaseEntity implements IClass {
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
