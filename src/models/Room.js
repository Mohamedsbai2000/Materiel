const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  nom: { type: String, required: true },
  localisation: { type: String, required: true },
});

module.exports = mongoose.model('Salle', roomSchema);
