const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ajustez le chemin selon votre structure

// Route pour créer un nouvel utilisateur
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ajoutez d'autres routes ici pour lire, mettre à jour, et supprimer des utilisateurs

module.exports = router;

