const Sequelize = require('sequelize');
const { db } = require("./config")

const sequelize = new Sequelize(db.name, db.user, db.password, {
	host: db.host,
	port: db.port,
	dialect: db.dialect,
	dialectOptions: {
		supportBigNumbers: true
	}
});

sequelize.authenticate()
	.then(() => console.log("DB is connected"))
	.catch(err => console.log(err));

module.exports = sequelize;