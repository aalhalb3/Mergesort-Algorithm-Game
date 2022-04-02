const newConnection = require('./databaseConnection');
let conn = newConnection();
conn.connect();
conn.query(`SELECT * FROM Customer;`
,(err, rows, fields) => {
    if(err){
        console.log(err);
    }
    else{
        for (r of rows) {
            console.log(r);
        }
    }
})