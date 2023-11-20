module.exports = function (Sequelize, Schema) {
    var User = Schema.define("user_master",
      {
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          number: {
            type: Sequelize.STRING,
            allowNull: false,
          },
      },
      { underscored: true }
    );
  
    User.sync({ force: false, alter: true });
    return User;
  };