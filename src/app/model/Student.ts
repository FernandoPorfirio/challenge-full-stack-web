import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Enrolment from './Enrolment'
import City from './City'
import State from './State'

@Entity('student')
class Student {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'varchar', length: 320 })
  email: string

  @Column({ type: 'varchar', length: 15, unique: true, nullable: false })
  ra: string

  @Column({ type: 'varchar', length: 14 })
  cpf: string

  @Column({ type: 'date' })
  birthdate: Date

  @Column({ type: 'varchar', length: 15, nullable: true })
  whatsappNumber: string

  @Column({ type: 'varchar', length: 15, nullable: true })
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

  @OneToMany(() => Enrolment, (enrolment) => enrolment.student)
  enrolment: Enrolment[]
}

export default Student
