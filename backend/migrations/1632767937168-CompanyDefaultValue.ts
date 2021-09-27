import { MigrationInterface, QueryRunner } from 'typeorm'

export class CompanyDefaultValue1632767937168 implements MigrationInterface {
  name = 'CompanyDefaultValue1632767937168'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE company CHANGE siren siren char(9) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE siret siret char(14) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE vat vat char(12) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE address1 address1 varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE address2 address2 varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE zip_code zip_code varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE city city varchar(255) NOT NULL DEFAULT ''")
    await queryRunner.query("ALTER TABLE company CHANGE country country varchar(255) NOT NULL DEFAULT ''")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE company CHANGE country country varchar(255) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE city city varchar(255) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE zip_code zip_code varchar(255) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE address2 address2 varchar(255) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE address1 address1 varchar(255) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE vat vat char(12) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE siret siret char(14) NOT NULL')
    await queryRunner.query('ALTER TABLE company CHANGE siren siren char(9) NOT NULL')
  }
}
