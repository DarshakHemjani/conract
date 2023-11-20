module.exports = function (Sequelize, Schema) {
  var Contact = Schema.define("contact_master",
    {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.JSON,
        allowNull: false,
        unique: 'unique_user_contact'      },
    },
    { underscored: true }
  );

  Contact.sync({ force: false, alter: true });
  return Contact;
};