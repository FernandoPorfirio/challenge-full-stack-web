import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity
} from 'typeorm'

import State from '../state/state.model'
import City from '../city/city.model'
import Enrolment from '../enrolment/enrolment.model'

export interface IStudent {
  id?: number
  name: string
  email: string
  ra?: string
  cpf: string
  birthdate: Date
  whatsappNumber: string
  contactNumber: string
  street: string
  number: string
  neighborhood: string
  zip_code: string
  actived: boolean
  createdAt: Date
}

@Entity('student')
export default class Student extends BaseEntity implements IStudent {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'varchar', length: 320 })
  email: string

  @Column({ type: 'varchar', length: 15, unique: true })
  ra: string

  @Column({ type: 'varchar', length: 14 })
  cpf: string

  @Column({ type: 'date' })
  birthdate: Date

  @Column({ type: 'varchar', length: 15 })
  whatsappNumber: string

  @Column({ type: 'varchar', length: 15 })
  contactNumber: string

  @Column({ type: 'varchar', length: 255 })
  street: string

  @Column({ type: 'varchar', length: 20 })
  number: string

  @ManyToOne(() => City, { eager: true })
  @JoinColumn({ name: 'city' })
  city: City

  @ManyToOne(() => State, { eager: true })
  @JoinColumn({ name: 'state' })
  state: State

  @Column({ type: 'varchar', length: 100 })
  neighborhood: string

  @Column({ type: 'boolean', default: true })
  actived: boolean

  @Column({ type: 'varchar', length: 10 })
  zip_code: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToMany(() => Enrolment, (enrolment) => enrolment.student)
  enrolment: Enrolment[]
}
