import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('user')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', { length: 50 })
  name: string
}

export default User
