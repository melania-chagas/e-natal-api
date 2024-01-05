require('dotenv').config();
const app = require('./app');
const schedulesTask = require('./send_emails/sendEmails');

const port = process.env.API_PORT || 3001;

schedulesTask();

app.listen(port, () => console.log('ouvindo porta', port));
