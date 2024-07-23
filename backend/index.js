// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes

// Register a new user
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const isuser = db.get(`SELECT * from users where email = ?`,[email]);
  if (isuser) {
    res.status(203).send("User already exists");
  } else {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;

    db.run(query, [name, email, password], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: this.lastID });
    });
  }
});

// Login user
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.get(query, [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(200).json({ user: row });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
