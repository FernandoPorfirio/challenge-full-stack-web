import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('course')
class Course {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'int' })
  institution_id: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}

export default Course
