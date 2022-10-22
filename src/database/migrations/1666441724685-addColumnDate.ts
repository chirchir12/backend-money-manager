import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnDate1666441724685 implements MigrationInterface {
  name = 'addColumnDate1666441724685';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD "createdAt" date NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD "date" date DEFAULT '"2022-10-22T12:28:45.019Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD "date" TIMESTAMP WITH TIME ZONE DEFAULT '2022-10-22 15:21:10.61+03'`,
    );
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
  }
}
