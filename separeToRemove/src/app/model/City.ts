import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import State from './State'

@Entity('city')
class City {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @ManyToOne(() => State, (state) => state.city)
  @JoinColumn({
    name: 'state_id'
  })
  state: State
}

export default City
