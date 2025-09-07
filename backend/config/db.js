const config = require("./config");
const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
});

// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     port: config.development.port,
//     dialect: "postgres",
//   }
// );

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to Supabase PostgreSQL successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };