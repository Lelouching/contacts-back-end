# Back-End Contact

## Descrição

Um projeto que consiste em criar um usuário, poder logar e registrar contatos que são vinculados à você e salvos no banco de dados

## Instalação

```bash
$ npm install
```

## Configuração do banco de dados

```bash
# Crie um arquivo .env na raiz do projeto e preencha com as configuracoes do arquivo .env.example substituindo por suas informações

# e então rode o seguinte comando
$ npm run typeorm migration:run -- -d ./src/data-source
```

## Rodando o aplicativo

```bash

# para rodar a aplicação, só dar o seguinte comando no terminal
$ npm run dev

Url do aplicativo: http://localhost:3000