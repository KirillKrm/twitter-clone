import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserDates1683739074643 implements MigrationInterface {
  name = 'UserDates1683739074643'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    )
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`)
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`)
  }
}
