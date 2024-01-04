require('dotenv').config();
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { scheduledDate, scheduledTime, timezone } = require('./config/config');
const UserModel = require('../models/User.model');
const WaitingListModel = require('../models/WaitingList.model');
const { createEmailMessage } = require('./helpers/createEmailMessage');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


async function emailsToSend() {
  const allUsers = await UserModel.getAllUsers();
  

  const emailsData = await Promise.all(
  allUsers.map(async ({ id: userId, name, email: address }) => {
    const allTitlesByUserId = await WaitingListModel
      .findAllTitlesInListByUserId(userId);
    const body = createEmailMessage(name, allTitlesByUserId);
    return {
      address,
      body
    };
  }));

  return emailsData;
}


async function sendEmails(emails) {
  const emailResponses = Promise.all(
    emails.map(async (email) => {
    const mailOptions = {
      to: email.address,
      subject: 'eBooks',
      text: email.body,
    };
    try {
      await transporter.sendMail(mailOptions);
      return 'Enviado com sucesso para: ' + email.address;

    } catch (error) {
      return 'Falha no envio para: ' + email.address + 'erro: ' + error;
    }
  }));

  return emailResponses;
}


async function runsScheduledTask() {
  const emailsData = await emailsToSend();
  if(emailsData.length === 0) {
    console.log('Nenhum pedido foi registrado na lista de espera');
    return;
  }
  console.log('Enviando...');
  const emailResponses = await sendEmails(emailsData);
  console.log(emailResponses);

}


function schedulesTask(){
  const [ hour, min, sec ] = scheduledTime.split(':');
  const [ , month, day ] = scheduledDate.split('/');
  console.log('Agendando...');

  cron.schedule(`${sec} ${min} ${hour} ${day} ${month} *`, () => {
    runsScheduledTask();
  }, {
    timezone
  });
}

module.exports = schedulesTask;
