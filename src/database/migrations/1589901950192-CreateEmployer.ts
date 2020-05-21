import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmployer1589901950192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employer',
        columns: [
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'salary',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'age',
            type: 'decimal',
            precision: 5,
          },
          {
            name: 'id',
            type: 'decimal',
            isPrimary: true,
            precision: 5,
            generationStrategy: 'increment',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employer');
  }
}
