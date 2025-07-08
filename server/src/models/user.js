const { db, DataTypes } = require("./../db.js");

const user = db.define("user", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

db.sync();

module.exports = user;
