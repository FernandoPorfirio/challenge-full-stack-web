import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('enrolment')
class Enrolment {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'date' })
  date: Date

  @Column({ type: 'int' })
  student_id: number

  @Column({ type: 'int' })
  class_id: number

  @Column({ type: 'int' })
  status_id: number
}

export default Enrolment
