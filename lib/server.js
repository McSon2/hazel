const http = require('http');
const hazel = require('./index');

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL,
  PORT
} = process.env;

// Définir l'URL du serveur
const url = VERCEL_URL || PRIVATE_BASE_URL;

// Configuration Hazel
const hazelHandler = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
});

// Définir le port (Railway attribue un port via la variable PORT)
const port = PORT || 3000;

// Créer un serveur HTTP et démarrer l'écoute
http.createServer(hazelHandler).listen(port, () => {
  console.log(`Hazel running on port ${port}`);
});
