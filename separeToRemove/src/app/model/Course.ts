import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import Classs from './Classs'
import Institution from './Institution'

@Entity('course')
class Course {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column({ type: 'varchar', length: 50 })
  name: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToMany(() => Classs, (classs) => classs.course)
  classs: Classs[]

  @ManyToOne(() => Institution, (institution) => institution.course)
  @JoinColumn({
    name: 'institution_id'
  })
  institution: Institution

}

export default Course
