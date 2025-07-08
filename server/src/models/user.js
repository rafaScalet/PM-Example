const { db, DataTypes } = require("./../db");

const user = db.define("user", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

db.sync();

module.exports = user;
