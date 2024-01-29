import 'reflect-metadata'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

import { CreateTables1706358632771 } from './migrations/1706358632771-CreateTables'
import { InsertDataInState1706359245735 } from './migrations/1706359245735-InsertDataInState'
import { InsertDataInCity1706359255544 } from './migrations/1706359255544-InsertDataInCity'
import { InsertDataInEnrolmentStatus1706359269830 } from './migrations/1706359269830-InsertDataInEnrolmentStatus'

import AccessLevel from '../app/model/AccessLevel'
import AccessLevelTransaction from '../app/model/AccessLevelTransaction'
import City from '../app/model/City'
import Class from '../app/model/Class'
import Course from '../app/model/Course'
import Enrolment from '../app/model/Enrolment'
import EnrolmentStatus from '../app/model/EnrolmentStatus'
import Institution from '../app/model/Institution'
import State from '../app/model/State'
import Student from '../app/model/Student'
import Transaction from '../app/model/Transaction'
import User from '../app/model/User'
import UserAccessLevel from '../app/model/UserAccessLevel'

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
  model: [
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
