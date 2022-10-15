import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1664864712689 implements MigrationInterface {
  name = 'UserMigration1664864712689';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL NOT NULL,
        "isActive" boolean NOT NULL DEFAULT true,
        "isArchived" boolean NOT NULL DEFAULT false,
        "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "createdBy" character varying(300) NOT NULL,
        "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "lastChangedBy" character varying(300) NOT NULL,
        "internalComment" character varying(300),
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
