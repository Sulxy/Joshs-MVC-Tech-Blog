const Sequelize = require("sequelize");

// To pull the environment variables from the .env file
require("dotenv").config();

// Create a new Sequelize object and connect to the database
// const sequelize = process.env.JAWSDB_URL // <-- JAWSDB_URL is an environment variable that Heroku provides
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, { // localhost
//             host: "localhost",
//             dialect: "mysql",
//             dialectOptions: {
//                 decimalNumbers: true,
//             },
//         });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
        decimalNumbers: true,
    },
});

// Export the sequelize object
module.exports = sequelize;