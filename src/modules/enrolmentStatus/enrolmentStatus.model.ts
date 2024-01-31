import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

export interface IEnrolmentStatus {
  id?: number
  name: string
}

@Entity('enrolmentStatus')
export default class EnrolmentStatus
  extends BaseEntity
  implements IEnrolmentStatus
{
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string
}
