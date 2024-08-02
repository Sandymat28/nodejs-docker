# Utiliser l'image officielle Node.js version 18 comme image de base
FROM node:18

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /nodejsapp

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer toutes les dépendances définies dans package.json
RUN npm install

# Copier tous les fichiers et dossiers de l'application dans le répertoire de travail
COPY . .

# Exposer le port 3000 pour que l'application soit accessible
EXPOSE 3000

# Commande à exécuter lorsque le conteneur démarre pour lancer l'application Node.js
CMD ["node", "server.js"]
