import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { User, AccessLevel, Transaction } from "../modules/models";

class DatabaseManager {
  private datasourceOptions: DataSourceOptions
  private dataSource: DataSource

  constructor(private config: DataSourceOptions) {
    this.datasourceOptions = config
  }

  getDataSource() {
    return this.dataSource
  }

  async initializeDataSource() {
    this.dataSource = new DataSource({
      ...this.datasourceOptions,
      entities: [User, AccessLevel, Transaction],
      migrations: []
    })

    await this.dataSource.initialize().then(async () => {
      console.log('Data source initialized')
    })
  }
}

export default DatabaseManager
