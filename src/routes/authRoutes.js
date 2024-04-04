const express = require('express');
const authController = require('../controllers/authController'); // Assurez-vous que le chemin est correct
const router = express.Router();

// Route pour s'inscrire
router.post('/register', authController.register);

// Route pour se connecter
router.post('/login', authController.login);

module.exports = router;
