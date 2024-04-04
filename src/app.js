require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Material = require('./models/Material');
const User = require('./models/User'); // Assurez-vous que le chemin est correct
const Room = require('./models/Room'); // Vérifiez que le chemin est correct



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.get('/materials', async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    res.status(500).send(err);
  }
});



// Récupérer tous les utilisateurs
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer un nouvel utilisateur
app.post('/users', async (req, res) => {
  const user = new User({
    nom: req.body.nom,
    email: req.body.email,
    motDePasse: req.body.motDePasse,
    role: req.body.role
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Récupérer toutes les salles
app.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer une nouvelle salle
app.post('/rooms', async (req, res) => {
  const room = new Room({
    nom: req.body.nom,
    localisation: req.body.localisation
  });

  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
