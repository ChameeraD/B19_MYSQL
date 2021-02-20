# ThirdFort-Note-API

This is a simple API that saves personal notes in a MYSQL database.

To run the API execute following commands.

```shell
npm install
npm start
```

To run tests

```shell
npm test
```


##### Database
Create database and table for perform crud operation of node js restful API.

```sql
CREATE TABLE Note (
    NoteId int NOT NULL AUTO_INCREMENT,
    NoteHeading varchar(255) NOT NULL,
    NoteContent varchar(255),
    IsArchived boolean,
    PRIMARY KEY (NoteId)
)
```


###### Database Connection Details
Required database connection for fetching or update data into database is as follows.

When establishing a connection, you can set the following options:

`host`: The hostname of the database you are connecting to. (Default: localhost)
`user`: The MySQL user to authenticate as.
`password`: The password of that MySQL user.
`database`: Name of the database to use for this connection (Optional).

There is a db connection wrapper, this will allow you to create connection on db which stored on a single file and can be reuse by other modules.To create database connection in dbConnection.js include following code.

```javascript
var mysql=require('mysql')

var dbConn = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});
dbConn.connect();

module.exports = dbConn;
```

 
## API
                            localhost:3000/notes/

### API Methods

- **/notes/addNew** - Accepts a POST request and Create a new Note in the database.
- **/notes/**- Aceept a GET request and Fetch all the Notes details from the database.
- **/notes/:id**- Aceept a GET request and Returns a single Note record.
- **/notes/update** - Aceept a PUT request and Update a Note. Only Note Heading and the Note Content.
- **/notes/delete/:id**-Aceept a DELETE request andDelete a Note.
