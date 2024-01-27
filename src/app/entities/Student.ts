import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column({ type: 'int' })
  city: number

  @Column({ type: 'int' })
  state: number

  @Column({ type: 'varchar', length: 100 })
  neighborhood: string

  @Column({ type: 'varchar', length: 10 })
  zip_code: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}

export default Student
