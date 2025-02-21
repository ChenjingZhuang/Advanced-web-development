import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

async function initDB() {
    return open({
        filename: "./database.db",
        driver: sqlite3.Database
    });
}

(async () => {
    const db = await initDB();
    await db.exec(
        `CREATE TABLE IF NOT EXISTS items (
             id INTEGER PRIMARY KEY AUTOINCREMENT, 
             name TEXT, 
             quantity INTEGER, 
             price REAL
         )`
    );

    app.post("/add", async (req, res) => {
        const { name, quantity, price } = req.body;
        try {
            const result = await db.run(
                "INSERT INTO items (name, quantity, price) VALUES (?, ?, ?)",
                [name, quantity, price]
            );
            res.json({ id: result.lastID });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.get("/items", async (req, res) => {
        const items = await db.all("SELECT * FROM items");
        res.json(items);
    });

    app.delete("/delete/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const result = await db.run("DELETE FROM items WHERE id = ?", id);
            res.json({ deleted: result.changes });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})();
