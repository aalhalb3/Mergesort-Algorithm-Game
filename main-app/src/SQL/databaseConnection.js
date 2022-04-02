const mysql = require('mysql');

function establishConnection(){
    let connection = mysql.createConnection({
        host: '34.133.136.39',
        user: 'root',
        password: 'password',
        database: 'projectDB'
    });

    return connection;
}

module.exports = establishConnection;