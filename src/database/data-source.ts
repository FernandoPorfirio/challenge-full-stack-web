import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { CreateTables1706358632771 } from './migrations/1706358632771-CreateTables'
import { InsertDataInState1706359245735 } from './migrations/1706359245735-InsertDataInState'
import { InsertDataInCity1706359255544 } from './migrations/1706359255544-InsertDataInCity'
import { InsertDataInEnrolmentStatus1706359269830 } from './migrations/1706359269830-InsertDataInEnrolmentStatus'

import AccessLevel from '../app/entities/AccessLevel'
import AccessLevelTransaction from '../app/entities/AccessLevelTransaction'
import City from '../app/entities/City'
import Class from '../app/entities/Class'
import Course from '../app/entities/Course'
import Enrolment from '../app/entities/Enrolment'
import EnrolmentStatus from '../app/entities/EnrolmentStatus'
import Institution from '../app/entities/Institution'
import State from '../app/entities/State'
import Student from '../app/entities/Student'
import Transaction from '../app/entities/Transaction'
import User from '../app/entities/User'
import UserAccessLevel from '../app/entities/UserAccessLevel'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'd20m07',
  // database: "educacao",
  database: 'teste',
  synchronize: true,
  logging: false,
  entities: [
    AccessLevel,
    AccessLevelTransaction,
    City,
    Class,
    Course,
    Enrolment,
    EnrolmentStatus,
    Institution,
    State,
    Student,
    Transaction,
    User,
    UserAccessLevel
  ],
  migrations: [
    CreateTables1706358632771,
    InsertDataInState1706359245735,
    InsertDataInCity1706359255544,
    InsertDataInEnrolmentStatus1706359269830
  ],
  subscribers: []
})
