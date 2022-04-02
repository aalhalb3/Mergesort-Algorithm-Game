const newConnection = require('./src/SQL/databaseConnection');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


console.log("Server Started");

const app = express()

let cors = require('cors');
app.use(cors());


app.use(cookieParser("secret stuff"))
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/user-time", (req, res) => {
    let conn = newConnection();
    res.header("Access-Control-Allow-Origin: *");
    conn.connect();
        conn.query(`SELECT * FROM Customer;`
        ,(err, rows, fields) =>{
            if(err)
                console.log(err)
            else{
                res.send(rows);
            }
            conn.end();
        }
    )
})

app.post('/user-login', (req, res) => {
let email = req.body.email;
let conn = newConnection();
conn.connect();
    conn.query(`SELECT * FROM Customer WHERE emailAddress = "${email}";`
    ,(err, rows, fields) =>{
        if(err)
            console.log(err)
        else{
            if(rows.length == 1){
                res.send(`${rows[0].LevelReached}`);
            }

            else if(rows.length == 0){
                    conn.query(`INSERT INTO Customer (emailAddress, LevelReached)
                                      VALUES ('${email}', 1)`
                    , (err, rows, fields) => {
                    if (err){
                        console.log(err);
                    }
                    
                    else{
                        res.send("1");
                    }
                    });
                    conn.end();
            }
        }
    }
    )
})

app.post("/level-completion", (req, res) => {

    console.log(req.body.email)

    let conn = newConnection();
    let completedLevel = req.body.completedLevel
    let email = req.body.email
    let completedTime = req.body.completedTime
    console.log("THIS IS " + completedLevel)

    conn.connect();
        conn.query(`SELECT * FROM Customer WHERE emailAddress = "${email}";`
        ,(err, rows, fields) =>{
            if (err){
                console.log(err);
            }
            else{
                for (r of rows) {

                    let temp = ["LevelOneTime", "LevelTwoTime", "LevelThreeTime", "LevelFourTime", "LevelFiveTime"];
                    let tempValue = [r.LevelOneTime, r.LevelTwoTime, r.LevelThreeTime, r.LevelFourTime, r.LevelFiveTime]
                    let levelTimeCompleted = temp[completedLevel - 1]
                    //console.log("IT IS" + temp[completedLevel - 1])

                    if(completedLevel == r.LevelReached){
                        conn.query(`UPDATE Customer SET LevelReached = LevelReached + 1
                                    WHERE emailAddress = "${email}";`
                        ,(err, rows, fields) =>{
                        if (err){
                            console.log(err);
                        }
    
                        else{
                            console.log("Successfully update current level " + r.LevelReached)
                        }
                        })
                    }

                    if(tempValue[completedLevel - 1] === null || completedTime < tempValue[completedLevel - 1]){
                        conn.query(`UPDATE Customer SET ${levelTimeCompleted} = ${completedTime}
                                    WHERE emailAddress = "${email}"`
                        ,(err, rows, fields) =>{
                        if (err){
                            console.log(err);
                        }
    
                        else{
                            console.log("Successfully update time completion " + tempValue[completedLevel - 1])
                        }
                        })
                    }
                    console.log(r.LevelReached)
                    console.log("COMPLETED TIME: " + completedTime)

                    conn.end(); 
                }  
        }
    })
    //console.log(completedLevel)
})

app.listen(3001);