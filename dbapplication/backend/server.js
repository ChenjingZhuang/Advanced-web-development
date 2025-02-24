const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('database-file.db');

// Create the users table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL
)`);

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to create a record
app.post('/users', (req, res) => {
    const { name, address } = req.body;
    db.run(`INSERT INTO users (name, address) VALUES (?, ?)`, [name, address], function (err) {
        if (err) {
            return res.status(500).send('Error inserting record: ' + err.message);
        }
        res.status(201).send('A row has been inserted with rowid ' + this.lastID);
    });
});

// Endpoint to read records
app.get('/users', (req, res) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            return res.status(500).send('Error retrieving records: ' + err.message);
        }
        res.json(rows);
    });
});

// Endpoint to update a record
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    db.run(`UPDATE users SET name = ?, address = ? WHERE id = ?`, [name, address, id], function (err) {
        if (err) {
            return res.status(500).send('Error updating record: ' + err.message);
        }
        res.send(`Record with id ${id} has been updated`);
    });
});

// Endpoint to delete a record
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
        if (err) {
            return res.status(500).send('Error deleting record: ' + err.message);
        }
        res.send(`Record with id ${id} has been deleted`);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
