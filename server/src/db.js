const { Sequelize, DataTypes } = require("sequelize");

const pgUser = process.env.POSTGRES_USER || "user";
const pgPass = process.env.POSTGRES_PASSWORD || "password";
const pgDB = process.env.POSTGRES_DB || "example";
const host = process.env.POSTGRES_HOST || "localhost";

const db = new Sequelize(pgDB, pgUser, pgPass, { dialect: "postgres", host });

module.exports = { db, DataTypes };
