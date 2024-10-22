import { table } from "console";
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("avatart").nullable();
    table.timestamps(true, true); //Create_at, Updated_at;
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}
