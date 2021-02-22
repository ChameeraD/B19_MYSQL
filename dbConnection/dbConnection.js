var mysql = require("mysql");

var dbConn = mysql.createConnection({
    host: "database.cu61jp3tqrdt.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "123456789",
    database: "database",
});
dbConn.connect();

module.exports = dbConn;