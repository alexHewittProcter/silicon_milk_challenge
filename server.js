const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


let database = () => {
  let connection = mysql.createConnection({
    host     : 'host.docker.internal',
    user     : 'root',
    password : 'root',
    database : 'SiliconMilk',
    port:'3308'
  });
  return connection;
} 



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users',(req,res) => {
  let conn = database();
  conn.connect();
  conn.query('SELECT * FROM applicants;', function (error, results, fields) {
    res.send(results);
    if (error) {
      this.statusCode = 500;
    } else {
      res.statusCode = 200;
    }
  });
  conn.end();
  
  
});

app.post('/api/user/status',(req,res) =>{
  console.log(req.body.post);
  let {id,status} = req.body.post;
  let conn = database();
  conn.connect();
  conn.query("UPDATE applicants SET applicantStatus=? WHERE applicantId=?",[status,id],function(error,results,fields) {
    // console.log(results);
    res.send("Okay");
    if (error) {
      res.statusCode = 500;
    } else {
      res.statusCode = 200;
    }
  });
  conn.end();
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));