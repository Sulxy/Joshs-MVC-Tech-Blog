// Connect to the database using Sequelize. It is used in the models folder 
// to create the tables and in the server.js file to start the server.
const Sequelize = require("../models/user");

// To pull the environment variables from the .env file
require("dotenv").config();

// Create a new Sequelize object and connect to the database
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
            host: "localhost",
            dialect: "mysql",
            dialectOptions: {
                decimalNumbers: true,
            },
        });

// Export the sequelize object
module.exports = sequelize;
