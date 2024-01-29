import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('accessleveltransaction')
class AccessLevelTransaction {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'int' })
  accesslevel_id: number

  @Column({ type: 'int' })
  transaction_id: number
}

export default AccessLevelTransaction
