import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserUpdate1684177379789 implements MigrationInterface {
  name = 'UserUpdate1684177379789'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "nickname" character varying NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`)
  }
}
