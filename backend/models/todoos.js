const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../utils/config");
const logger = require("../utils/logger");
const sequelize = new Sequelize(config.DATABASE_URI, {
  dialect: "postgres",
});

class Todoo extends Model {}
Todoo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
  }
);
Todoo.sync({ force: true, logging: false }).then(() => {
  logger.info("Todoo table created");
});
module.exports = Todoo;
