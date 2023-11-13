const User = require("./users");
const Todoo = require("./todoos");
const logger = require("../utils/logger");

Todoo.sync({ force: true, logging: false }).then(() => {
  logger.info("Todoo table created");
});
User.sync({ force: true, logging: false }).then(() => {
  logger.info("User table created");
});
Todoo.belongsTo(User),
  {
    foreignKey: "userId",
    as: "user",
  };
User.hasMany(Todoo, { as: "todoos" });

module.exports = {
  User,
  Todoo,
};
