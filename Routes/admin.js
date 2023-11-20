module.exports = function (app, model, controller) {


    app.post('/sync', controller.contact.syncContacts);

    app.get('/common-users', controller.contact.findCommonUsers );

    app.get('/get-contacts', controller.contact.getContacts );

}


