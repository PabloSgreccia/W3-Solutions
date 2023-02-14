require("dotenv").config();

//Configs DB
const host = process.env.DB_HOST;
const username = process.env.DB_USER || "root";
const database = "countries";
const password = process.env.DB_PASS;
const dialect = "mysql";
const logging = false;

//Configs Seeds
const seederStorage = "sequelize";
const seederStorageTableName = "seeds";

//Configs Migrations
const migrationStorage = "sequelize";
const migrationStorageTableName = "migrations";

module.exports = {
  username,
  database,
  password,
  host,
  dialect,
  logging,
  seederStorage,
  seederStorageTableName,
  migrationStorage,
  migrationStorageTableName
}