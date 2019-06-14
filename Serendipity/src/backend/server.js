const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server started!');
})

app.route('/api/user').post((req, res) => {
  res.send(201, req.body)
})
