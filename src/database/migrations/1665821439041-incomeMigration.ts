import { MigrationInterface, QueryRunner } from 'typeorm';

export class incomeMigration1665821439041 implements MigrationInterface {
  name = 'incomeMigration1665821439041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "income" ("id" SERIAL NOT NULL, "amount" numeric(10,2) NOT NULL DEFAULT '0', "source" character varying NOT NULL, "comment" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "actorIdId" integer, CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ADD CONSTRAINT "FK_1e4bbca07a15b0dc2268e70e338" FOREIGN KEY ("actorIdId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "income" DROP CONSTRAINT "FK_1e4bbca07a15b0dc2268e70e338"`,
    );
    await queryRunner.query(`DROP TABLE "income"`);
  }
}
