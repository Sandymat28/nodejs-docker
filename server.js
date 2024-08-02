'use strict'; // Utilise le mode strict de JavaScript pour une meilleure gestion des erreurs

// Importer le module 'express' qui permet de créer des applications web en Node.js
const express = require('express');

// Définir les constantes pour le port et le nom d'hôte
const PORT = 3000; // Port sur lequel le serveur va écouter
const HOST = '0.0.0.0'; // Nom d'hôte, 0.0.0.0 signifie que le serveur écoute sur toutes les interfaces réseau disponibles

// Créer une instance de l'application Express
const app = express();

// Définir une route pour la méthode GET sur la racine ('/') de notre serveur
app.get('/', (req, res) => {
  // Envoyer une réponse avec le texte 'Testing Node JS Application'
  res.send('Testing Node JS Application');
});

// Faire en sorte que l'application écoute sur le port et le nom d'hôte définis
app.listen(PORT, HOST);

// Loguer un message dans la console lorsque le serveur est démarré
console.log(`Running on http://${HOST}:${PORT}`);
