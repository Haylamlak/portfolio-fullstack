const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("MySQL connected!");
  }
});

// POST /api/contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  const sql = "INSERT INTO contactMessage (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ msg: "Database error" });
    }
    res.json({ msg: "Message sent successfully!" });
  });
});

module.exports = router;