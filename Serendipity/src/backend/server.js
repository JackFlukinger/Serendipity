const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

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
  res.write("1");
  res.send();
});

app.post('/api/users', (req, res) => {
  console.log("trying to create user");
  var email = req.body.email;
  var age = req.body.age;
  var gender = req.body.gender;
  var likedgenres = req.body.likedgenres;

  console.log(email, age, gender, likedgenres);
  
});
