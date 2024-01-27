import "reflect-metadata";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "d20m07",
  database: "educacao",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [] 

})