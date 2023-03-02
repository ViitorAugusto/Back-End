import { MigrationInterface, QueryRunner } from "typeorm"

export class createTableUser1677792368268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
          
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            
        `)
    }

}
