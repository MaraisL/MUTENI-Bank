# Étape 1 : Construire l'application Angular avec Node.js 22.11
FROM node:22.11 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour l'installation des dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . ./

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Servir l'application avec Nginx
FROM nginx:1.23

# Copier les fichiers de construction depuis la première étape
COPY --from=build /app/dist/muteni-bank/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
