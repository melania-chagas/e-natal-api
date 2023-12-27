module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'max-len': ['error', { 'code': 80 }], // Limite de 80 caracteres por linha
      'semi': ['error', 'always'], // Exige ponto e vírgula
      'no-unused-vars': 'error', // Erro se houver variáveis não utilizadas
      'no-multiple-empty-lines': ['error', { 'max': 2 }], /* Limite de 2 linhas
      em branco consecutivas*/
      'import/no-unresolved': 'error', /* Gera erro se um módulo importado não 
      pode ser resolvido*/
      'import/named': 'error', /* Gera erro se um membro nomeado em um módulo 
      importado não existe*/
      'object-curly-spacing': ['error', 'always'], /* Exige espaço entre as 
      chaves de um objeto*/
      "eol-last": ["error", "always"] /* Exige uma linha em branco no final do 
      arquivo.*/
    },
  };
