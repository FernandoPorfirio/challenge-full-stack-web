import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  OneToMany
} from 'typeorm'

import State from '../state/state.model'
import City from '../city/city.model'
import Course from '../course/course.model'

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

  @Column({ type: 'varchar', length: 320 })
  email: string

  @Column({ type: 'varchar', length: 18 })
  cnpj: string

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

  @Column({ type: 'varchar', length: 10 })
  zip_code: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToMany(() => Course, (course) => course.institution)
  course: Course[]
}
