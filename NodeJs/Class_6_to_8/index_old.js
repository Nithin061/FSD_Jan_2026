const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'demo_app',
  password: 'nithin@061',
});


connection.query(
    "SELECT * FROM user",
    function (err, result, fields )
    {
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(result);
    }
)


let q = `INSERT INTO user (id, username, email, password) VALUES ?`;


let data = [];
for (let i = 0; i < 100; i++) {
    data.push([
        uuidv4(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]);
}


connection.query(
    q,
    [data],
    function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    }
);
