const User = require('../models/User'); // Modifiez le chemin selon votre structure
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(req.body.password, 8);

    // Création du nouvel utilisateur
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    // Sauvegarde de l'utilisateur dans la base de données
    await newUser.save();

    // Création du token JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // expire dans 24 heures
    });

    res.status(201).send({ user: newUser, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    // Trouver l'utilisateur par email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ token: null, message: "Invalid password!" });
    }

    // Création du token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // expire dans 24 heures
    });

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};
