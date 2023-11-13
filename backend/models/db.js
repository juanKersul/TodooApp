const { Sequelize } = require("sequelize");
const config = require("../utils/config");
const sequelize = new Sequelize(config.DATABASE_URI, {
  dialect: "postgres",
});
module.exports = sequelize;
