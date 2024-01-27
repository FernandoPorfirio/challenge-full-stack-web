import "reflect-metadata";
import {DataSource} from "typeorm";

import { CreateTables1706358632771 } from "./migrations/1706358632771-CreateTables";
import { InsertDataInState1706359245735 } from "./migrations/1706359245735-InsertDataInState";
import { InsertDataInCity1706359255544 } from "./migrations/1706359255544-InsertDataInCity";
import { InsertDataInEnrolmentStatus1706359269830 } from "./migrations/1706359269830-InsertDataInEnrolmentStatus";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "d20m07",
  // database: "educacao",
  database: "teste",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [
    CreateTables1706358632771,
    InsertDataInState1706359245735,
    InsertDataInCity1706359255544,
    InsertDataInEnrolmentStatus1706359269830
  ],
  subscribers: [] 

})