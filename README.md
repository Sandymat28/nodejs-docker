### Comment créer une image Docker pour l'application Node JS [2 étapes]

## d'abord Installer Node JS et NPM sur Ubuntu

## Étape 1 : création d'une application Node.js
Créons le répertoire nommé nodejsdocker pour ajouter des fichiers node js à tester.

$ sudo mkdir nodejsdocker
$ cd nodejsdocker

Créez le fichier package.json dans lequel vous spécifierez toutes les dépendances de votre application Node JS

$ sudo nano paquet.json

![image](https://github.com/user-attachments/assets/4ff1d1ff-7415-4d72-87cd-3d2ca21a8b8a)


{
  "name": "Docker_NodeJS_App",
  "version": "0.1",
  "description": "Node.js Application with Docker",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

Créez ensuite la page server.js pour tester l'application Node JS avec le framework express

$ sudo nano server.js

'use strict';

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


## Étape 2 : Comment créer une image Docker pour l'application Node JS

Créez ensuite le Dockerfile avec la commande ci-dessous dans le répertoire racine du projet

$ sudo nano Dockerfile

Créez maintenant l'image Docker à l'aide de la commande ci-dessous

$ sudo docker build -t nodejsdocker .

une fois la construction réussie, vous pouvez voir la liste des images  Docker à l'aide de la commande ci-dessous

$ docker images

Nous avons couvert comment créer une image  Docker pour l'application Node JS.


Exécutez le conteneur Docker, -p est utilisé pour mapper le port public au port interne du conteneur Docker. Ici, j'utilise le même port pour les deux.

$ docker run -p 3000:3000 nodejsdocker
ou
$ docker run -d  -p 3000:3000 nodejsdocker

$ docker login 

$ docker tag nodejsdocker emmanuel236/nodejsdocker

$ docker push emmanuel236/nodejsdocker


docker tag nodejsdocker emmanuel236/nodejsdocker

docker push emmanuel236/nodejsdocker
# nodejs-docker
