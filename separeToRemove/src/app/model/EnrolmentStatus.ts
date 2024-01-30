import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('enrolmentstatus')
class EnrolmentStatus {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string
}

export default EnrolmentStatus
