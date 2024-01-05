const { createEmailMessage } = require(
  '../../../../src/send_emails/helpers/createEmailMessage'
);
const {
  paramsCreateEmailMessage,
  expectedEmailMessage
} = require('../../mocks/mocks');


describe('Teste para createEmailMessage', () => {
  test('Deve criar a mensagem de email corretamente', () => {
    const { name, titles } = paramsCreateEmailMessage;

    const message = createEmailMessage(name, titles);

    expect(message).toEqual(expectedEmailMessage);
  });

});
