const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const dbFile = 'database.db';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize the SQLite database
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    description TEXT
);`);

// CRUD operations
app.post('/add', (req, res) => {
    const { name, quantity, description } = req.body;
    db.run(`INSERT INTO items (name, quantity, description) VALUES (?, ?, ?)`, [name, quantity, description], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json({ id: this.lastID });
    });
});

app.get('/items', (req, res) => {
    db.all(`SELECT * FROM items`, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(rows);
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM items WHERE id = ?`, id, function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json({ deletedID: id });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
