import { MigrationInterface, QueryRunner } from 'typeorm'

export class Twit1683739274624 implements MigrationInterface {
  name = 'Twit1683739274624'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "twit" (
        "id" SERIAL NOT NULL, 
        "content" character varying NOT NULL, 
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "authorId" integer, 
        CONSTRAINT "PK_2abd9f4b5f227ba1be8132df2b0" PRIMARY KEY ("id")
      )`,
    )
    await queryRunner.query(
      `ALTER TABLE "twit" ADD CONSTRAINT "FK_e981905c5686fcc00c81177ed4f" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "twit" DROP CONSTRAINT "FK_e981905c5686fcc00c81177ed4f"`,
    )
    await queryRunner.query(`DROP TABLE "twit"`)
  }
}
