import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'varchar', length: 320 })
  email: string

  @Column({ type: 'varchar', length: 60 })
  password: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdat: Date

  @Column({ type: 'boolean', default: true })
  actived: boolean
}

export default User
