import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCompany1632671570046 implements MigrationInterface {
  name = 'AddCompany1632671570046'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE company (
            id int NOT NULL AUTO_INCREMENT,
            is_main tinyint NOT NULL,
            name varchar(255) NOT NULL,
            siren char(9) NOT NULL,
            siret char(14) NOT NULL,
            vat char(12) NOT NULL,
            address1 varchar(255) NOT NULL,
            address2 varchar(255) NOT NULL,
            zip_code varchar(255) NOT NULL,
            city varchar(255) NOT NULL,
            country varchar(255) NOT NULL,
            created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
            updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
            PRIMARY KEY (id)
        ) ENGINE = InnoDB
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE company')
  }
}
