import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnFirstnameLastname1666156032557
  implements MigrationInterface
{
  name = 'AddColumnFirstnameLastname1666156032557';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "firstname" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "lastname" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstname"`);
  }
}
