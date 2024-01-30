import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'

class DatabaseManager {
  private datasourceOptions: DataSourceOptions
  private dataSource: DataSource

  constructor(private config: DataSourceOptions) {
    this.datasourceOptions = config
  }

  getDataSource() {
    return this.dataSource
  }

  public async initializeDataSource() {
    this.dataSource = new DataSource({
      ...this.datasourceOptions,
      entities: []
    })

    await this.dataSource
      .initialize()
      .then(async () => {
        console.log('Data source initialized')
      })
      .catch(async (error) => {
        console.error('Error creating database:', error)
        throw error
      })
  }
}

export default DatabaseManager
