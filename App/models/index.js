module.exports = function (Sequelize, Schema) {
	var module = {};
	
	module.contact = require('./contact')(Sequelize, Schema);
	module.user = require('./user')(Sequelize, Schema);

	return module;
}