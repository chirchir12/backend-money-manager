import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateColumnSasltNullable1666162409291
  implements MigrationInterface
{
  name = 'updateColumnSasltNullable1666162409291';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "salt" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "createdBy" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "createdBy" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "salt" SET NOT NULL`,
    );
  }
}
