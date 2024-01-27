import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDataInState1706359245735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const states = [
            { id: 12, name: 'Acre', abreviation: 'AC' },
            { id: 27, name: 'Alagoas', abreviation: 'AL' },
            { id: 16, name: 'Amapá', abreviation: 'AP' },
            { id: 13, name: 'Amazonas', abreviation: 'AM' },
            { id: 29, name: 'Bahia', abreviation: 'BA' },
            { id: 23, name: 'Ceará', abreviation: 'CE' },
            { id: 53, name: 'Distrito Federal', abreviation: 'DF' },
            { id: 32, name: 'Espírito Santo', abreviation: 'ES' },
            { id: 52, name: 'Goiás', abreviation: 'GO' },
            { id: 21, name: 'Maranhão', abreviation: 'MA' },
            { id: 51, name: 'Mato Grosso', abreviation: 'MT' },
            { id: 50, name: 'Mato Grosso do Sul', abreviation: 'MS' },
            { id: 31, name: 'Minas Gerais', abreviation: 'MG' },
            { id: 15, name: 'Pará', abreviation: 'PA' },
            { id: 25, name: 'Paraíba', abreviation: 'PB' },
            { id: 41, name: 'Paraná', abreviation: 'PR' },
            { id: 26, name: 'Pernambuco', abreviation: 'PE' },
            { id: 22, name: 'Piauí', abreviation: 'PI' },
            { id: 33, name: 'Rio de Janeiro', abreviation: 'RJ' },
            { id: 24, name: 'Rio Grande do Norte', abreviation: 'RN' },
            { id: 43, name: 'Rio Grande do Sul', abreviation: 'RS' },
            { id: 11, name: 'Rondônia', abreviation: 'RO' },
            { id: 14, name: 'Roraima', abreviation: 'RR' },
            { id: 42, name: 'Santa Catarina', abreviation: 'SC' },
            { id: 35, name: 'São Paulo', abreviation: 'SP' },
            { id: 28, name: 'Sergipe', abreviation: 'SE' },
            { id: 17, name: 'Tocantins', abreviation: 'TO' },
        ];

        const values = states.map(state => `(${state.id}, '${state.name}', '${state.abreviation}')`).join(', ');

        await queryRunner.query(
            `INSERT INTO state (id, name, abreviation) VALUES ${values}`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
