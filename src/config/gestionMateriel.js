const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/gestionMateriel';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));

mongoose.connect('mongodb://localhost/gestionMateriel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(err => console.error('Connexion à MongoDB échouée', err));
