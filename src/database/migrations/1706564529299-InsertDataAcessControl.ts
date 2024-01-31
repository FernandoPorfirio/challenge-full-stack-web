import UserEntity from '../../modules/user/user.model'
import { MigrationInterface, QueryRunner } from 'typeorm'

import bcrypt from 'bcryptjs'

export class InsertDataAcessControl1706564529299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO accesslevel (id, name, createdat) VALUES (1, 'ADM', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO accesslevel (id, name, createdat) VALUES (2, 'DEFAULT', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (1, 'createUser', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (2, 'getUser', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (3, 'createStudent', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (4, 'getStudent', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (5, 'findStudent', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO transaction (id, name, createdat) VALUES (6, 'removeStudent', CURRENT_TIMESTAMP)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 1)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 2)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 3)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 4)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 5)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (1, 6)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (2, 3)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (2, 4)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (2, 5)`
    )

    await queryRunner.query(
      `INSERT INTO accessleveltransaction (accesslevel_id, transaction_id) VALUES (2, 6)`
    )

    const resultAdmUserInsert = await queryRunner.manager.save(UserEntity, {
      name: 'ADM',
      email: 'adm@adm.com',
      password: bcrypt.hashSync('adm', 8)
    })

    const resultTesteUserInsert = await queryRunner.manager.save(UserEntity, {
      name: 'TESTE',
      email: 'teste@teste.com',
      password: bcrypt.hashSync('teste', 8)
    })

    await queryRunner.query(
      `INSERT INTO useraccesslevel (accesslevel_id, user_id) VALUES (1, ${resultAdmUserInsert.id})`
    )

    await queryRunner.query(
      `INSERT INTO useraccesslevel (accesslevel_id, user_id) VALUES (2, ${resultTesteUserInsert.id})`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
