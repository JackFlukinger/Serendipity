const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const dbPath = 'database.db';

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.listen(8000, () => {
  console.log('Server started!');
});

app.get('/api/users', (req, res) => {
  console.log("trying to fetch stage");
  let user = req.cookies.email;
  let stage = 1;

  if (user == undefined) {
    res.send({stage: stage.toString()});
  } else {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the SQlite database.');
    });


    let sql = 'SELECT stage FROM users WHERE email = \'' + user + '\';';

    stage = db.get(sql, (err, row) => {
      if (err) {
        return 1;
      }
      return row
        ? row.stage
        : 1;  //Return stage 1 if user is not in database
      });

      res.send({stage: stage.toString()});

    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
  }
});

app.post('/api/users', (req, res) => {
  console.log("trying to create user");

  let email = req.body.email;
  let age = req.body.age;
  let gender = req.body.gender;
  let likedgenres = req.body.likedgenres;

  //Validation checks
  if ((age<0 || age>100) || !email.includes('@') || !email.includes('.') || !(gender == 'Male' || gender =='Female' || gender == 'Other') || likedgenres.length < 3){

    res.send({result: "failure"});
  } else {

    console.log(email, age, gender, likedgenres);

    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the SQlite database.');
    });


    let sql = 'INSERT INTO users(email, age, gender, favgenres, stage) VALUES (\'' +
    email + '\', \'' +
    age + '\', \'' +
    gender + '\', \'' +
    likedgenres + '\', \'' +
    '2' + '\');';

    db.run(sql, function(err) {
      if (err) {
        res.send({result: "failure"});
      } else {
        console.log("Error");
        res.cookie('email', email, { maxAge: 4000000, httpOnly: true })
        .json({"result": "success"}).send();
      }
    });

    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
  }
});
