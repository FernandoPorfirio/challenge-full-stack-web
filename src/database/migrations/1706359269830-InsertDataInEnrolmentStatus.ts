import { MigrationInterface, QueryRunner } from 'typeorm'

export class InsertDataInEnrolmentStatus1706359269830
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const statusList = [
      { id: 1, name: 'Matriculado' },
      { id: 2, name: 'Trancado' },
      { id: 3, name: 'Desistência' },
      { id: 4, name: 'Pendente' },
      { id: 5, name: 'Promovido' },
      { id: 6, name: 'Formado' },
      { id: 7, name: 'Retido' },
      { id: 8, name: 'Abandono' },
      { id: 9, name: 'Cancelado' }
    ]

    const values = statusList
      .map((status) => `(${status.id}, '${status.name}')`)
      .join(', ')

    await queryRunner.query(
      `INSERT INTO enrolmentstatus (id, name) VALUES ${values}`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
