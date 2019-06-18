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

  if (user != undefined) {
    stage = sqlGetStage(user);
  }

  res.write(stage);
  res.send();
});

app.post('/api/users', (req, res) => {
  console.log("trying to create user");
  let email = req.body.email;
  let age = req.body.age;
  let gender = req.body.gender;
  let likedgenres = req.body.likedgenres;

  console.log(email, age, gender, likedgenres);
  sqlAddUser(age, gender, email, likedgenres);

  res.write("User added!")
  res.send();
});

function sqlAddUser(age, gender, email, genres) {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });


  let sql = 'INSERT INTO users(email, age, gender, favgenres) VALUES (\'' + 
  email + '\', \'' +
  age + '\', \'' +
  gender + '\', \'' +
  genres + '\', \'' +
  2 + '\');';

  db.run(sql);
  
  
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
}

function sqlGetStage(user) {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });


  let sql = 'SELECT stage FROM users WHERE email = \'' + user + '\';';

  db.get(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row
      ? console.log(row.stage)
      : console.log(1);  //Return stage 1 if user is not in database
    });
  

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
}