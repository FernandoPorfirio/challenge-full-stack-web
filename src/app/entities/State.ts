import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('state')
class State {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'char', length: 2 })
  abbreviation: string
}

export default State
