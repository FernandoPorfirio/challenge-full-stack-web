import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity('useraccesslevel')
class UserAccessLevel {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'int' })
  user_id: number

  @Column({ type: 'int' })
  accesslevel_id: number
}

export default UserAccessLevel
