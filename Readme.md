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
  <a href = "#-links- uteis">Links Uteis</a>•
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
    "image": "https://avatars.githubusercontent.com/u/4369522?v=4"```json
}
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

- **[NodeJS](https://nodejs.org/en/)**
- **[Cors](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Axios](https://github.com/axios/axios)**
- **[Express](https://expressjs.com/)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**

---

## Links Uteis

- [x] Link do deploy da api feito pelo Heroku: https://takeblipapi.herokuapp.com/repositoryTake
- [x] Link do BotLora na plataforma TakeBlip: https://cairo-cruz-25qx5.chat.blip.ai/?appKey=bXlib3Q0MjpmNmNiYTBlYS00YWMyLTQ0YmMtYTE2Zi1jYWJhM2YzYWEyZjY=

## 🦸 Autor
