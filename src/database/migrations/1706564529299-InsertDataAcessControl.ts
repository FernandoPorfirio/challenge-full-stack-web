import { MigrationInterface, QueryRunner } from "typeorm";

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

      const resultAdmUserInsert = await queryRunner.query(
        `INSERT INTO USER (name, email, password, createdat, actived) VALUES ('ADM', 'adm@adm.com', '${bcrypt.hashSync('adm', 8)}', CURRENT_TIMESTAMP, true)`
      )
      const returnedIdAdmUserInsert = resultAdmUserInsert.rows[0].id;

      const resultTesteUserInsert = await queryRunner.query(
        `INSERT INTO USER (name, email, password, createdat, actived) VALUES ('TESTE', 'teste@teste.com', '${bcrypt.hashSync('teste', 8)}', CURRENT_TIMESTAMP, true)`
      )
      const returnedIdTesteUserInsert = resultTesteUserInsert.rows[0].id;

      await queryRunner.query(
        `INSERT INTO useraccesslevel (accesslevel_id, user_id) VALUES (1, ${returnedIdAdmUserInsert})`
      )

      await queryRunner.query(
        `INSERT INTO useraccesslevel (accesslevel_id, user_id) VALUES (2, ${returnedIdTesteUserInsert})`
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
