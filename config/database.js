module.exports = function (dataBaseType) {
	var sequelize = new dataBaseType(process.env.database.dbname, process.env.database.username, process.env.database.password, {
		host: process.env.database.host,
		port: process.env.database.port,
		dialect: 'mysql',
		operatorsAliases: false,
		logging: false,
		pool: {
			max: 120,
			min: 5,
			acquire: 60000,
			//idle: 100000,
			idle: 30000,			
		}
	});

	sequelize.authenticate().then(() => {

		console.log('Database connection has been established successfully.');

	}).catch(err => {

		console.error('Unable to connect to the database:', err);

	});
	return sequelize;
	//End: sequelize database connection
}