import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity } from 'typeorm'

import User from '../user/user.model'
import Transaction from '../transaction/transaction.model'

export interface IAccessLevel {
  id?: number
  name: string
  createdat: Date
}

@Entity('accesslevel')
export default class AccessLevel extends BaseEntity implements IAccessLevel {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdat: Date

  @ManyToMany(() => User, user => user.accesLevel)
  user: User[]

  @ManyToMany(() => Transaction, transaction => transaction.accesLevel)
  transaction: Transaction[]
}
