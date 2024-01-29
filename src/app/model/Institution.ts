import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Course from './Course'
import City from './City'
import State from './State'

@Entity('institution')
class Institution {
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

export default Institution
