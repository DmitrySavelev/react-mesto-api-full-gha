const options = {
  origin: [
    'http://mesto.savelev.nomoredomains.monster',
    'https://mesto.savelev.nomoredomains.monster',
    'http://api.mesto.savelev.nomoredomains.monster',
    'https://api.mesto.savelev.nomoredomains.monster',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000',
    'https://localhost:3001',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: false,
};

module.exports = options;
