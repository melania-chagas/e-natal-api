const app = require('./app');

require('dotenv').config();

const port = process.env.API_PORT || 3001;

app.listen(port, () => console.log('ouvindo porta', port));
