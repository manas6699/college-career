const express = require('express');
const mysql = require('mysql');
const app = express();

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
  let sql2 = 'INSERT INTO user SET ?';
  db.query(sql2, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User added...');
    console.log('Last insert ID:', result.insertId);
  });
});


app.get('/p', (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User fetched...' + result[0].name +"..." + result[1].name);
  });
});

