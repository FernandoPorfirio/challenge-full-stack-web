import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'

import User from '../user/user.model'
import Transaction from '../transaction/transaction.model'
@Entity('accesslevel')
class AccessLevel {
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

export default AccessLevel
