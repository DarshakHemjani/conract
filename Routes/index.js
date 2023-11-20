module.exports = function (app, model, controllers) {

	require('./admin')(app, model, controllers.admin);

}	