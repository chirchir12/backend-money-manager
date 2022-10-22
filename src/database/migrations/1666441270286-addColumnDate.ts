import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnDate1666441270286 implements MigrationInterface {
  name = 'addColumnDate1666441270286';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "income" ADD "date" TIMESTAMP WITH TIME ZONE DEFAULT '"2022-10-22T12:21:10.610Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "date"`);
  }
}
