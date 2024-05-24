const express = require("express");
const mysql = require("mysql");
const app = express();
// bodyParser is used for parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3001", () => {
  console.log("Server started on port 3001");
});
const db = require('./database');

// add an event
app.post("/postEvent", (req, res) => {
  const heading = req.body.heading;
  const body = req.body.body;
  const image = req.body.image;
  const sqlInsert = "INSERT INTO event (heading, body, image) VALUES (?, ?, ?)";
  db.query(sqlInsert, [heading, body, image], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('An error occurred while inserting data.');
    }
    console.log('Inserted event:', result);
    res.status(200).send('Event added successfully.');
  });
});

//api to delete the data from the database
app.delete('/delete/:id', (req , res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM statistics WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})

// delete an event
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM event WHERE id = ?";
  db.query(sqlDelete, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('An error occurred while deleting data.');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Event not found.');
    }
    console.log('Deleted event with ID:', id);
    res.status(200).send('Event deleted successfully.');
  });
});


// Get all events API
app.get("/events", (req, res) => {
  const sqlQuery = 'select * from event';
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('An error occurred while fetching data.');
    }
    if (result.length === 0) {
      return res.status(404).send('No events found.');
    }
    res.status(200).json(result);
    console.log('Fetched events:', result);
  });
});

app.get("/", (req, res) => {
  const sqlQuary = "select * from statistics";
  db.query(sqlQuary, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  })
});

// api to get a single data from the database
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const sqlGet = "SELECT * FROM statistics WHERE id = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// // api to insert the data from the frontend to database
app.post("/postaData", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const company = req.body.company; 
  const salary = req.body.salary;   
  // insert an auto incremental id to sql
  const sqlInsert = "INSERT INTO statistics (name, company, salary) VALUES (?, ?, ?)";
  db.query(sqlInsert, [name, company, salary], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred while inserting data"); // Send a proper error response
    }
    console.log(result);
    res.status(200).send("Data inserted successfully"); // Send a success response
  });
});


// // api to update the data from the database---> update part
app.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const company = req.body.company;
  const salary = req.body.salary;
  const sqlUpdate =
    "UPDATE statistics SET name = ? , company = ? , salary = ? WHERE id = ?";
  db.query(sqlUpdate, [name, company, salary, id], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});


