</p>
<h1 align="center">
  <img alt="Desafio TakeBlip" title="Desafio TakeBlip" src="./assets/banner.png" />
</h1>

<h4 align="center">
  🤖 API para o ChatBot Lora. Status: Concluido✔️
</h4>

<p align="center">
  <a href="#-sobre-o-desafio">Sobre o desafio</a> •
  <a href="#-resultado-esperado-do-Desafio">Resultado esperado do desafio</a> •
  <a href="#-formato-do-arquivo-JSON">Formato do arquivo JSON</a> •
  <a href="#-como-executar-o-projeto">Como executar o Projeto</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#user-content--licença">Licença</a>
</p>

---

## 🤖 Sobre o desafio

## O desafio sugere a criação de um chatbot(Lora), que apresenta a cultura Take, contendo 6 tópicos de extrema importância para todos os colaboradores da empresa. Ainda deve ser criada uma API intermediaria que faz a comunicação com o repositorio da Take mostrando carrosel os 5 projetos mais antigos da empresa em C#.

## ⚙️ Resultado esperado do desafio

- [x] Seguir o fluxo conversional apresentado na documentação do desafio.
- [x] Criação de uma api intermediaria que faz a comunicação do chatbot com o Github
- [x] Fluxo do bot deve ser anexado junto com o projeto em um arquivo JSON.
- [x] Fazer deploy da aplicação e enviar o link do repositório para avaliação.

---

## 🎨 Formato do arquivo JSON

<h3> O arquivo JSON foi tratado para que o endpoint da api retorne com as três informações necessárias para inclusão do card no carrossel.
Com auxilio do Postman solicitei uma requisição get na api em localhost para a verificação do retorno Json da API. </h3>

<img alt="JSON" title="#JSON" src="./assets/json.png" width="1080px">

<h3>Explicação do JSON de saida da API:</h3>

````json
{
  "0": {
    "name": "takenet/library.data",
    "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
    "image": "https://avatars.githubusercontent.com/u/4369522?v=4"
  }, ...
}
```json
{
  "0": {
    "name": "nome do projeto",
    "description": "Descrição do projeto",
    "image": "imagem do projeto"
  }, ...
````

---

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/cairocruz/desafio_take_blip
# Acesse a pasta do projeto no terminal/cmd
$ cd desafiotake
# Vá para a pasta src
$ cd src
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ node index.js
# O servidor inciará na porta:8085 - acesse http://localhost:8085
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção da API:

- **[NODEJS](https://nodejs.org/en/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Axios](https://github.com/axios/axios)**
- **[Express](https://expressjs.com/)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**

---

## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
  <img style="border-radius: 50%;"
    src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
    width="100px;" alt="" />
  <br />
  <sub><b>Thiago Marinho</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago/" title="Rocketseat">🚀</a>
<br />

[![Twitter
Badge](https://img.shields.io/badge/-@tgmarinho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/tgmarinho)](https://twitter.com/tgmarinho)
[![Linkedin
Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/tgmarinho/)
[![Gmail
Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Thiago Marinho 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tgmarinho/)
