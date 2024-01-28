import 'reflect-metadata'
import dotenv from 'dotenv'
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


dotenv.config()


export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT || '3000', 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
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
