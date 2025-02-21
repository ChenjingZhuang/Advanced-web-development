const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('your-database-file.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Create a table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                // Insert a record into the table
                const name = 'John Doe';
                const email = 'john.doe@example.com';
                
                db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email], function (err) {
                    if (err) {
                        console.error('Error inserting record:', err.message);
                    } else {
                        console.log(`A row has been inserted with rowid ${this.lastID}`);
                    }
                    
                    // Close the database connection
                    db.close((err) => {
                        if (err) {
                            console.error('Error closing database:', err.message);
                        } else {
                            console.log('Database connection closed.');
                        }
                    });
                });
            }
        });
    }
});
