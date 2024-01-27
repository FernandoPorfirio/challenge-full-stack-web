import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('city')
class City {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'int' })
  state_id: number
}

export default City
