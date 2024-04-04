const mongoose = require('./config/database'); // Ajustez le chemin selon votre structure
const Utilisateur = require('./models/User'); // Assurez-vous que le chemin est correct

// Création d'une nouvelle instance du modèle Utilisateur
const user = new Utilisateur({
  nom: 'Doe',
  email: 'john.doe@example.com',
  motDePasse: 'password',
  role: 'admin'
});

// Sauvegarde de l'utilisateur dans la base de données
user.save()
  .then(doc => {
    console.log('Utilisateur ajouté avec succès', doc);
  })
  .catch(err => {
    console.error('Erreur lors de l\'ajout de l\'utilisateur', err);
  });
