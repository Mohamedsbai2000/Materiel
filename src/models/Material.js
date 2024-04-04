const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  salle: { type: Schema.Types.ObjectId, ref: 'Salle' },
  utilisateur: { type: Schema.Types.ObjectId, ref: 'Utilisateur' }
});

module.exports = mongoose.model('Material', materialSchema);
