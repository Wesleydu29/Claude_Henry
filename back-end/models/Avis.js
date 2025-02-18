const mongoose = require('mongoose');

const AvisSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  note: { type: Number, required: true, min: 1, max: 5 },
  avis: { type: String },
  date: {type: Date, default: Date.now}
  
});

module.exports = mongoose.model('Avis', AvisSchema);