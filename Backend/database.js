const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "manas_db",
  port: 3306,
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
  console.log("Connected to database!");
});

module.exports = db;
