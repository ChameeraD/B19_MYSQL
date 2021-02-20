var mysql=require('mysql')

var dbConn = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});
dbConn.connect();

module.exports = dbConn;