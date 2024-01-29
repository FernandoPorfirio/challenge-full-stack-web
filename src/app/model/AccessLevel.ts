import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('accesslevel')
class AccessLevel {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdat: Date
}

export default AccessLevel
