const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3001", () => {
  console.log("Server started on port 3001");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "manas",
  password: "manas@1999",
  database: "ishan",
  port: 3307,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});



app.get("/", (req, res) => {
  let post = { name: "Thor" };
  let sqlInsert = "INSERT INTO user SET ?";
  db.query(sqlInsert, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User added...");
    console.log("Last insert ID:", result.insertId);
  });
});

// api to get the data from the database to frontend
// testing
app.get("/admin", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// api to insert the data from the frontend to database
app.post("/post", (req, res) => {
  const name = req.body.name;
  const company = req.body.Company;
  const salary = req.body.Salary;
  const sqlInsert =
    "INSERT INTO user (name, company , salary) VALUES (?, ? , ?)";
  db.query(sqlInsert, [name, company, salary], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//api to delete the data from the database
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM user WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//api to update the data from the database---> view part
app.get("/admin/edit/:id", (req, res) => {
  const id = req.params.id;
  const sqlGet = "SELECT * FROM user WHERE id = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
// api to update the data from the database---> update part
app.put("/admin/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const company = req.body.Company;
  const salary = req.body.Salary;
  const sqlUpdate =
    "UPDATE user SET name = ? , company = ? , salary = ? WHERE id = ?";
  db.query(sqlUpdate, [name, company, salary, id], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


// notice secion
// api to get the notice heading from the database to frontend
app.get("/admin/notice", (req, res) => {
  db.query("SELECT * FROM noticetable", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});