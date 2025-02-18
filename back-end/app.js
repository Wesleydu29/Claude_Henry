require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const Avis = require('./models/Avis');


const app = express();

// remplacer la chaine de caractère par celle de mongoDB
// useNewurlparser est obsolète, à modifier

mongoose.connect(process.env.URL_BDD)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// pour gérer les requêtes POST venant du front
app.use(express.json());

// pour gérer les problèmes de cors.
app.use(cors());

  // afin d'obtenir les thing crées.
app.get('/api/avis', (req, res, next) => {
    Avis.find()
      .then(avis => res.status(200).json(avis))
      .catch(error => res.status(400).json({ error }));
  });

// poster un nouvel élément.
app.post('/api/avis', (req, res) => {
    delete req.body._id;
    const avis = new Avis({
      ...req.body,
      date: req.body.date ? new Date(req.body.date) : new Date() // Ajout de la date si absente
    });
    // afin d'enregistrer dans la base de données.
    avis.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });


module.exports = app;