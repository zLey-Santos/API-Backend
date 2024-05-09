# Documentação da API Backend

Este repositório contém uma API backend para gerenciamento de tarefas (tasks).
A API oferece endpoints para listar todas as tarefas, criar uma nova tarefa, excluir uma tarefa e atualizar uma tarefa existente.

## Funcionalidades Principais

Listar Todas as Tarefas: Endpoint para obter todas as tarefas cadastradas.

Criar Nova Tarefa: Endpoint para adicionar uma nova tarefa ao sistema.

Excluir Tarefa: Endpoint para remover uma tarefa do sistema.

Atualizar Tarefa: Endpoint para atualizar os dados de uma tarefa existente.

# Estrutura do Projeto

## O projeto segue a seguinte estrutura de pastas:

controllers: Contém os controladores responsáveis por lidar com as requisições HTTP.

middlewares: Contém os middlewares para validar os dados das requisições.

models: Contém os modelos que representam os dados do banco de dados.

routes: Contém as definições das rotas da API.

src: Diretório raiz contendo os principais arquivos da aplicação.

# Configuração do Ambiente

## Antes de executar a aplicação, é necessário configurar as seguintes variáveis de ambiente no arquivo .env:

PORT: Porta em que o servidor será executado.

MYSQL_HOST: Host do servidor MySQL.

MYSQL_USER: Nome de usuário do MySQL.

MYSQL_PASSWORD: Senha de acesso ao MySQL.

DB: Nome do banco de dados.

## Dependências

# O projeto utiliza as seguintes dependências principais:

dotenv: Para carregar as variáveis de ambiente a partir do arquivo .env.

express: Framework web para Node.js.

mysql: Cliente MySQL para Node.js.

mysql2: Cliente MySQL assíncrono e promissor para Node.js.

## Como Executar

# Para executar a aplicação, siga os passos abaixo:

Instale as dependências do projeto executando `bash npm install `
Configure as variáveis de ambiente no arquivo .env.
Execute o servidor Node.js usando npm start.
