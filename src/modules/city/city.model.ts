import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn
} from 'typeorm'

import State from '../state/state.model'

export interface ICity {
  id?: number
  name: string
}

@Entity('city')
export default class City extends BaseEntity implements ICity {
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
