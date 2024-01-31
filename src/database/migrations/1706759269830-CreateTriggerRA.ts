import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTriggerRA1706359269830
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE OR REPLACE FUNCTION after_insert_student()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.ra := LPAD(NEW.id::TEXT, 15, '0');
        UPDATE student SET ra = NEW.ra WHERE id = NEW.id;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql`
    )

    await queryRunner.query(
      `CREATE TRIGGER after_insert_student_trigger
      AFTER INSERT ON student
      FOR EACH ROW
      EXECUTE FUNCTION after_insert_student()`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
