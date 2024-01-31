import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity } from 'typeorm'

import AccessLevel from '../accessLevel/accessLevel.model'

export interface ITransaction {
  id?: number
  name: string
  createdat: Date
}

@Entity('transaction')
export default class Transaction extends BaseEntity implements ITransaction {
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
      name: 'transaction_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'accesslevel_id',
      referencedColumnName: 'id'
    }
  })
  accesLevel: AccessLevel[]
}

