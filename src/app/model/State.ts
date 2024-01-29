import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import City from './City'

@Entity('state')
class State {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'char', length: 2 })
  abbreviation: string

  @OneToMany(() => City, (city) => city.state)
  city: City[]
}

export default State
