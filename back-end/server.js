require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // SQLite library
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to SQLite:', err);
    } else {
        console.log('Connected to SQLite database');
        // Create the "avis" table if it doesn't exist
        db.run(`
            CREATE TABLE IF NOT EXISTS avis (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom TEXT NOT NULL,
                prenom TEXT NOT NULL,
                note INTEGER NOT NULL,
                avis TEXT NOT NULL,
                date DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error('Error creating table:', err);
            } else {
                console.log('Table "avis" is ready');
            }
        });
    }
});

// Routes

// Add a review
app.post('/api/avis', (req, res) => {
    const { nom, prenom, note, avis } = req.body;

    if (!nom || !prenom || !note || !avis) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = `
        INSERT INTO avis (nom, prenom, note, avis)
        VALUES (?, ?, ?, ?)
    `;
    const params = [nom, prenom, note, avis];

    db.run(query, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Review added successfully", id: this.lastID });
    });
});

// Get all reviews
app.get('/api/avis', (req, res) => {
    const query = `
        SELECT * FROM avis
        ORDER BY date DESC
    `;

    db.all(query, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});