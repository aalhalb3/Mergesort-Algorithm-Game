const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '34.133.136.39',
    user: 'root',
    password: 'password',
    database: 'projectDB'
});

connection.connect();

connection.query(`DROP TABLE Customer`, (err, rows, fields) => {
    if (err){
        console.log(err);
    }
    
    else{
        console.log('Table Dropped!');
    }
});

connection.query(`CREATE TABLE Customer(
                  userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  emailAddress VARCHAR(80) UNIQUE,
                  LevelOneTime DOUBLE,
                  LevelTwoTime DOUBLE,
                  LevelThreeTime DOUBLE,
                  LevelFourTime DOUBLE,
                  LevelFiveTime DOUBLE,
                  LevelReached INT NOT NULL
)`, (err, rows, fields) => {
    if (err){
        console.log(err);
    }

    else{
        console.log('Table Created!');
    }
});

connection.end();