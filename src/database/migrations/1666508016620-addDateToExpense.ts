import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDateToExpense1666508016620 implements MigrationInterface {
  name = 'addDateToExpense1666508016620';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category" ADD "type" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD "date" date DEFAULT '"2022-10-23T06:53:36.941Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "date" SET DEFAULT '"2022-10-23T06:53:36.940Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "date" SET DEFAULT '2022-10-22'`,
    );
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "date"`);
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "type"`);
  }
}
