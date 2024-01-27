import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1706358632771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'email', type: 'varchar', length: '320'},
                    { name: 'password', type: 'varchar', length: '60'},
                    { name: 'createdat', type: 'timestamp', default: 'now()' },
                    { name: 'actived', type: 'boolean', default: true },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'accesslevel',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'createdat', type: 'timestamp', default: 'now()' },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'transaction',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'createdat', type: 'timestamp', default: 'now()' },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'useraccesslevel',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'user_id', type: 'int' },
                    { name: 'accesslevel_id', type: 'int' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['user_id'],
                        referencedTableName: 'user',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['accesslevel_id'],
                        referencedTableName: 'accesslevel',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'accessleveltransaction',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'accesslevel_id', type: 'int' },
                    { name: 'transaction_id', type: 'int' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['accesslevel_id'],
                        referencedTableName: 'accesslevel',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['transaction_id'],
                        referencedTableName: 'transaction',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'state',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'abreviation', type: 'char', length: '2'},
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'city',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'state_id', type: 'int' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['state_id'],
                        referencedTableName: 'state',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'institution',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'email', type: 'varchar', length: '320'},
                    { name: 'cnpj', type: 'varchar', length: '18'},
                    { name: 'contactNumber', type: 'varchar', length: '15'},
                    { name: 'street', type: 'varchar', length: '255'},
                    { name: 'number', type: 'varchar', length: '20'},
                    { name: 'city', type: 'int' },
                    { name: 'state', type: 'int' },
                    { name: 'neighborhood', type: 'varchar', length: '100'},
                    { name: 'zip_code', type: 'varchar', length: '10'},
                    { name: 'createdAt', type: 'timestamp', default: 'now()' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['city'],
                        referencedTableName: 'city',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['state'],
                        referencedTableName: 'state',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'course',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'institution_id', type: 'int' },
                    { name: 'createdAt', type: 'timestamp', default: 'now()' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['institution_id'],
                        referencedTableName: 'institution',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'class',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'start_date', type: 'date'},
                    { name: 'end_date', type: 'date'},
                    { name: 'course_id', type: 'int' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['course_id'],
                        referencedTableName: 'course',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'student',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'email', type: 'varchar', length: '320'},
                    { name: 'ra', type: 'varchar', length: '15', isNullable: false, isUnique: true },
                    { name: 'cpf', type: 'varchar', length: '14'},
                    { name: 'birthdate', type: 'date'},
                    { name: 'whatsappNumber', type: 'varchar', length: '15', isNullable: true },
                    { name: 'contactNumber', type: 'varchar', length: '15', isNullable: true },
                    { name: 'street', type: 'varchar', length: '255'},
                    { name: 'number', type: 'varchar', length: '20'},
                    { name: 'city', type: 'int' },
                    { name: 'state', type: 'int' },
                    { name: 'neighborhood', type: 'varchar', length: '100'},
                    { name: 'zip_code', type: 'varchar', length: '10'},
                    { name: 'createdAt', type: 'timestamp', default: 'now()' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['city'],
                        referencedTableName: 'city',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['state'],
                        referencedTableName: 'state',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'enrolmentstatus',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'enrolment',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '50'},
                    { name: 'date', type: 'date'},
                    { name: 'student_id', type: 'int' },
                    { name: 'class_id', type: 'int' },
                    { name: 'status_id', type: 'int' },
                ],
                foreignKeys: [
                    {
                        columnNames: ['student_id'],
                        referencedTableName: 'student',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['class_id'],
                        referencedTableName: 'class',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['status_id'],
                        referencedTableName: 'enrolmentstatus',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
