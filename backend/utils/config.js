require("dotenv").config();

const PORT = process.env.PORT || 3001;
const DATABASE_URI = process.env.DATABASE_URI || "";
const SECRET_KEY = process.env.SECRET_KEY || "";
module.exports = {
  DATABASE_URI,
  PORT,
  SECRET_KEY,
};
