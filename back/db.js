require("dotenv").config();
const Sequelize = require("sequelize");

//See envExample file for the creating local variables that are using in process.env

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_user,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            supportBigNumbers: true,
        },
    }
);

sequelize
    .authenticate()
    .then(() => console.log("DB is connectessd"))
    .catch((err) => console.log(err));

module.exports = sequelize;
