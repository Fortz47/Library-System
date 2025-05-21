import { Sequelize } from "sequelize";

const username = "circulation_dev";
const password = "circulation_dev_pwd";
const host = "localhost";
const port = 3306;
const dbName = "circulation_dev_db";
const dialect = "mysql";
const dbUrl = `mysql://${username}:${password}@${host}:${port}/${dbName}`;

// const sequelize = new Sequelize(dbName, username, password, {
//   host,
//   dialect,
// });

const sequelize = new Sequelize(dbUrl);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectToDatabase;