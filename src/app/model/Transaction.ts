import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'

import AccessLevel from './AccessLevel'

@Entity('transaction')
class Transaction {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdat: Date

  @ManyToMany(() => AccessLevel, accesLevel => accesLevel.transaction)
  @JoinTable({
    name: 'accessleveltransaction',
    joinColumn: {
      name: 'accesslevel_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'transaction_id',
      referencedColumnName: 'id'
    }
  })
  accesLevel: AccessLevel[]
}

export default Transaction
