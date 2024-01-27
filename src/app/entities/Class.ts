import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('class')
class Class {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'int' })
  course_id: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}

export default Class
