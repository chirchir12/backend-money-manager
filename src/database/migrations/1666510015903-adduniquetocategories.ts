import { MigrationInterface, QueryRunner } from 'typeorm';

export class adduniquetocategories1666510015903 implements MigrationInterface {
  name = 'adduniquetocategories1666510015903';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "date" SET DEFAULT '"2022-10-23T07:26:56.214Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "date" SET DEFAULT '"2022-10-23T07:26:56.215Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "date" SET DEFAULT '2022-10-23'`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "date" SET DEFAULT '2022-10-23'`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" DROP CONSTRAINT "UQ_23c05c292c439d77b0de816b500"`,
    );
  }
}
