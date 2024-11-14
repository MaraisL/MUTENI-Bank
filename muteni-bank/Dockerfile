# Utiliser une image Node.js 22.11 officielle comme image de base
FROM node:22.11-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Utiliser une image Nginx officielle pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build Angular vers le répertoire Nginx
COPY --from=build /app/dist/muteni-bank /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
