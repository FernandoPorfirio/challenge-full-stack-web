import { CreateTables1706358632771 } from './migrations/1706358632771-CreateTables'
import { InsertDataInState1706359245735 } from './migrations/1706359245735-InsertDataInState'
import { InsertDataInCity1706359255544 } from './migrations/1706359255544-InsertDataInCity'
import { InsertDataInEnrolmentStatus1706359269830 } from './migrations/1706359269830-InsertDataInEnrolmentStatus'
import { InsertDataAcessControl1706564529299 } from './migrations/1706564529299-InsertDataAcessControl'
import { CreateTriggerRA1706359269830 } from './migrations/1706759269830-CreateTriggerRA'

export const migrations = [
  CreateTables1706358632771,
  InsertDataInState1706359245735,
  InsertDataInCity1706359255544,
  InsertDataInEnrolmentStatus1706359269830,
  InsertDataAcessControl1706564529299,
  CreateTriggerRA1706359269830
]
