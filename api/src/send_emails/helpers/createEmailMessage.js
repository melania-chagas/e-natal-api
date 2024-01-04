function createEmailMessage(name, titles) {
  const nameEdited = name.charAt(0).toUpperCase() + name.slice(1)
  .toLowerCase();

  const titlesEdited = titles.map(title => `- ${title}`).join('\n');

  const message = 'Olá, ' + nameEdited  + '!\n' +
    'Aqui estão todos os presentes que prometi:\n' +
    titlesEdited + '\n' +
    'Espero que goste! Boa leitura!\n' +
    'Atenciosamente,\n' +
    'Papai Noel.';
  return message;
}

module.exports = {
  createEmailMessage
};
