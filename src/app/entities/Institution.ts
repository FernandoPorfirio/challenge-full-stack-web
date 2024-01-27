import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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

export default Institution
