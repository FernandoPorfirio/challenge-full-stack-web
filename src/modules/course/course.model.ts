import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  OneToMany
} from 'typeorm'

import Class from '../class/class.model'
import Institution from '../institution/institution.model'

export interface ICourse {
  id?: number
  name: string
  createdAt: Date
}

@Entity('course')
export default class Course extends BaseEntity implements ICourse {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToMany(() => Class, (classs) => classs.course)
  classs: Class[]

  @ManyToOne(() => Institution, (institution) => institution.course)
  @JoinColumn({
    name: 'institution_id'
  })
  institution: Institution
}
