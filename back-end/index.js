require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
};

const db = mysql.createConnection(dbConfig);


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');


    db.query('CREATE DATABASE IF NOT EXISTS claude_henry', (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database "claude_henry" created or already exists');

        db.query('USE claude_henry', (err) => {
            if (err) {
                console.error('Error switching to database:', err);
                return;
            }
            console.log('Using database "claude_henry"');


            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS avis (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nom VARCHAR(255) NOT NULL,
                    prenom VARCHAR(255) NOT NULL,
                    note INT NOT NULL,
                    avis TEXT NOT NULL,
                    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;
            db.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                    return;
                }
                console.log('Table "avis" created or already exists');
            });
        });
    });
});




app.post('/api/avis', (req, res) => {
    const { nom, prenom, note, avis } = req.body;
    if (!nom || !prenom || !note || !avis) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = "INSERT INTO avis (nom, prenom, note, avis) VALUES (?, ?, ?, ?)";
    db.query(query, [nom, prenom, note, avis], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Review added successfully", id: result.insertId });
    });
});


app.get('/api/avis', (req, res) => {
    const query = "SELECT * FROM avis ORDER BY date DESC";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});