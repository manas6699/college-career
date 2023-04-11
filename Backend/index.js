const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('3001', () => {
  console.log('Server started on port 3001');
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'manas',
  password: 'manas@1999',
  database: 'ishan',
  port: 3307
  
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


app.get('/createuser', (req, res) => {
  let sql = 'CREATE TABLE user (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User table created...');
    
  });
});


app.get('/', (req, res) => {
  let post = {name: 'Thor'};
  let sqlInsert = 'INSERT INTO user SET ?';
  db.query(sqlInsert, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User added...');
    console.log('Last insert ID:', result.insertId);
  });
});

// api to get the data from the database to frontend
  // testing 
app.get('/admin', (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// api to insert the data from the frontend to database
app.post('/post', (req, res) => {
  const name = req.body.name;
  const company = req.body.Company;
  const sqlInsert = 'INSERT INTO user (name, company) VALUES (?, ?)';
  db.query(sqlInsert, [name, company], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  }
  );
});

