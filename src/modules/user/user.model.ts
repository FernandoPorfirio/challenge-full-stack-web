import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable, BaseEntity} from 'typeorm'
import bcrypt from 'bcryptjs'

import AccessLevel from '../accessLevel/accessLevel.model'

export interface IUser {
  id?: number
  name: string
  email: string
  password: string
  createdat: Date
  actived: boolean
}

@Entity('user')
export default class User extends BaseEntity implements IUser  {
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
