module.exports = function (model) {
	var module = {};

	//all model loading
	module.contact = require('./admin/contact')(model);

	
	return module;
}
