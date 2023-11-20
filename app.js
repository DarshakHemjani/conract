var config = require("./env");
var NODE_ENV = process.env.NODE_ENV || "development";
process.env = config();
process.env.NODE_ENV = NODE_ENV;

global.path = require('path')

const express = require('express')
const app = express();
var port = process.env.port;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = require('http').createServer(app);

// sequelize
var { Sequelize } = require("sequelize");
global.Sequelize = Sequelize;
var sequelizeDB = require("./config/database")(Sequelize);

global.sequelize1 = sequelizeDB;


global.config = require("./config/constants.js");

var model = require("./App/models/index")(Sequelize, sequelizeDB);

var controllers = require("./App/controllers/index")(model);
require("./Routes/index")(app, model, controllers);

app.set("port", port);
server.listen(port, () => {
    console.log("(---------------------------------)");
    console.log("|         Server Started...       |");
    console.log("|   " + process.env.baseUrl + "    |");
    console.log("(---------------------------------)");
})
//End: Server connection


module.exports = { app: app, server: server };

