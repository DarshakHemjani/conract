var envJson = {
    localhost: {
      port: "3333",
      baseUrl: "http://localhost:3333/",
      siteName: "contact",
      database: {
        dbname: "contact",
        username: "root",
        password: "",
        port: "",
        host: "localhost",
      },
    },
}
  module.exports = () => {
    var env = process.env.NODE_ENV || "localhost";
    return envJson[env];
  };
  