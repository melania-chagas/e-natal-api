require('dotenv').config();
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const UserModel = require('../models/User.model');
const WaitingListModel = require('../models/WaitingList.model');
const { createEmailMessage } = require('./helpers/createEmailMessage');
const LogModel = require('../models/Log.model');


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.ETHEREAL_EMAIL,
    pass: process.env.ETHEREAL_PASS
  }
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
      subject: 'Presente de natal',
      text: email.body,
    };
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(info);
      LogModel.insertLogsIntoTable(email.address, true, info.response);
      return 'Enviado com sucesso para: ' + email.address;

    } catch (error) {
      LogModel.insertLogsIntoTable(email.address, false, `${error}`);
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
  console.log('Enviando emails...');
  const emailResponses = await sendEmails(emailsData);
  console.log(emailResponses);
}


function schedulesTask(){
  const timezone = process.env.TIMEZONE;
  const scheduledTime = process.env.SCHEDULED_TIME;
  const scheduledDate = process.env.SCHEDULED_DATE;

  const [ hour, min, sec ] = scheduledTime.split(':');
  const [ , month, day ] = scheduledDate.split('/');
  
  cron.schedule(`${sec} ${min} ${hour} ${day} ${month} *`, () => {
    runsScheduledTask();
  }, {
    timezone
  });
  console.log(
    'Envio de emails agendado para o dia',
    `${day}/${month} às ${hour}:${min}:${sec}`
  );
}

module.exports = schedulesTask;
