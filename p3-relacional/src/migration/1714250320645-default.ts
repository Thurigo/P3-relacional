import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714250320645 implements MigrationInterface {
    name = 'Default1714250320645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cor" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."tasks_staus_enum" AS ENUM('CONCLUIDA', 'ANDAMENTO', 'PENDENTE')`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "dataStart" TIMESTAMP NOT NULL, "dataClose" TIMESTAMP NOT NULL, "tipo" character varying NOT NULL, "staus" "public"."tasks_staus_enum" NOT NULL DEFAULT 'PENDENTE', "categoria_id" integer, "user_id" integer, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "peso" integer NOT NULL, "senha" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categorias" ADD CONSTRAINT "FK_1d97e32834a53286c44b38ae286" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_0b8a0426621d41d6999bdd6f2c2" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_db55af84c226af9dce09487b61b" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_db55af84c226af9dce09487b61b"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_0b8a0426621d41d6999bdd6f2c2"`);
        await queryRunner.query(`ALTER TABLE "categorias" DROP CONSTRAINT "FK_1d97e32834a53286c44b38ae286"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TYPE "public"."tasks_staus_enum"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
