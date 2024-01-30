import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable} from 'typeorm'
import bcrypt from 'bcryptjs'

import AccessLevel from './AccessLevel'

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

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  @ManyToMany(() => AccessLevel, accesLevel => accesLevel.user)
  @JoinTable({
    name: 'useraccesslevel',
    joinColumn: {
      name: 'accesslevel_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    }
  })
  accesLevel: AccessLevel[]
}

export default User
