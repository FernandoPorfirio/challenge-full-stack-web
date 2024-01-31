import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm'

import City from '../city/city.model'

export interface IState {
  id?: number
  name: string
  abreviation: string
}

@Entity('state')
export default class State extends BaseEntity implements IState {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'char', length: 2 })
  abreviation: string

  @OneToMany(() => City, (city) => city.state)
  city: City[]
}
