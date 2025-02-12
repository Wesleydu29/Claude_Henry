require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // MongoDB library
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

const env = require('./env')

// MongoDB connection

mongoose.connect(env.URL_BDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema for the "avis" collection
const avisSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    note: { type: Number, required: true },
    avis: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

// Create a model for the "avis" collection
const Avis = mongoose.model('Avis', avisSchema);

// Routes

// Add a review
app.post('/api/avis', async (req, res) => {
    const { nom, prenom, note, avis } = req.body;

    if (!nom || !prenom || !note || !avis) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newAvis = new Avis({ nom, prenom, note, avis });
        await newAvis.save();
        res.json({ message: "Review added successfully", id: newAvis._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all reviews
app.get('/api/avis', async (req, res) => {
    try {
        const avisList = await Avis.find().sort({ date: -1 }); // Sort by date in descending order
        res.json(avisList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});