# Aula Selenium + Mocha

Este projeto mostra, com um exemplo simples de login na aplicação pública https://www.saucedemo.com/, duas formas de escrever testes com Selenium em JavaScript:

- `promise`: encadeamento com `then()`
- `async`: uso de `async/await`

## Pré-requisitos

- Node.js 18+ instalado
- Navegador Chrome ou Edge disponível para o Selenium Manager

## Instalação

```bash
npm install
```

## Execução

```bash
npm run promise
npm run async
npm test
```

## O que o exemplo faz

Os dois testes acessam o login do Sauce Demo, preenchem usuário e senha e validam se a página principal aparece após o login.

Credenciais usadas no exemplo:

- usuário: `standard_user`
- senha: `secret_sauce`

## Estrutura

- `test/login.promise.spec.js` mostra a versão com promise chain.
- `test/login.async.spec.js` mostra a versão com `async/await`.