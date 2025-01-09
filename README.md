# Tarefas+

![project-image](public/assets/readme-images/home.png)

O **Tarefas +** é uma plataforma de rede social para cadastrar e mostrar suas tarefas publicamente, que conecta você aos demais usuários de forma rápida e divertida. Desenvolvido com _Next e TypeScript_, o site utiliza o _Firebase Database_ para gerenciamento de dados. Atualmente, está em fase de planejamento para lançamento na Vercel.

## Sumário

1. [Visão Geral do Projeto](#visão-geral-do-projeto-funcionalidades-principais)
   - [Atualização da estatística inical](#1-estatísticas-atualizadas-quanto-a-quantidade-de-dados-no-database)
   - [Dados Detalhados](#2-dados-detalhados)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas-linguagens-e-ferramentas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Screenshots](#screenshots)
   - [Iphone 14 pro max](#iphone-14-pro-max)
   - [Ipad pro](#ipad-pro)
   - [Mobile](#mobile)
   - [Desk](#desktop)
6. [Requisitos para Rodar o Projeto Localmente](#requisitos-para-rodar-o-projeto-localmente)
7. [Rodar o Projeto Localmente](#rodar-o-projeto-localmente)
8. [Autores](#autores)
9. [Licença](#licença)

## Visão Geral do Projeto (Funcionalidades Principais)

### 1. Estatísticas atualizadas quanto a quantidade de dados no Database:

- Os usuários podem verificar na página _Home_ a quantidade total de comentários e posts feitos no site.

### 2. Dados Detalhados:

- **Tarefa:** Exibe a o objetivo da tarefa cadastrada pelo usuário.
- **Tarefa pública:** Mostra se a tarefa foi selecionada como _Pública_ para os demais usuários.
- **Compartilhamento:** Habilita um botão para compartilhamento de tarefas públicas.
- **Comentários:** Exibe todos os comentários e qual usuário comentou em sua tarefa pública.

## Tecnologias Utilizadas (Linguagens e ferramentas)

<table>
    <tr>
      <td align="center">
        <a href="https://nextjs.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="40px" alt="Next logo" />
          <br />
          <sub>
            <b>Next.JS</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.typescriptlang.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" width="40px" alt="TypeScript logo" />
          <br />
          <sub>
            <b>TypeScript</b>
          </sub>
        </a>
      </td>
    </tr>
</table>
<table border-style="none">
  <tr>
      <td align="center">
        <a href="https://github.com/MarcioJorgeMelo/tarefas-nextJS">
          <br />
          <sub>
            <b>Tarefas+</b>
          </sub>
        </a>
      </td>
    <td align="center">
        <a href="https://firebase.google.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="40px" alt="Firebase logo" />
          <br />
          <sub>
            <b>Firebase</b>
          </sub>
        </a>
      </td>
    <td align="center">
      <a href="https://git-scm.com/">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="35px;" alt="logo git"/><br />
        <sub>
          <b>Git</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="35px;" alt="logo github"/>
        <br />
        <sub margin-top="50px;">
          <b>Github</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Estrutura do Projeto

O projeto é organizado em vários arquivos para melhor organização do código e separação de interesses:

- `public/`: A pasta serve como o local para armazenar arquivos estáticos que não passam pelo processo de build do Next e podem ser acessados diretamente no navegador.
- `src/`: Onde encontra-se o processo de desenvolvimento de todo o código-fonte do sistema.
- `styles/`: Encontra-se a estilização global do projeto.
- `components/`: A pasta contém todos os componentes utilizados na aplicação.
- `pages/`: A pasta contém a estrutura das páginas da aplicação.
- `services/`: A pasta contém as configurações para utilização das funções do Firebase.

## Screenshots

### Iphone 14 pro max

![App mobile Screenshot](public/assets/readme-images/iphone14.png)

### Ipad pro

![App ipad Screenshot](public/assets/readme-images/ipad.png)

### Mobile

![App mobile Screenshot](public/assets/readme-images/mobile.png)

### Desktop

![App desktop Screenshot](public/assets/readme-images/home.png)
![App desktop Screenshot](public/assets/readme-images/login.png)
![App desktop Screenshot](public/assets/readme-images/homeLogged.png)
![App desktop Screenshot](public/assets/readme-images/dashboard.png)
![App desktop Screenshot](public/assets/readme-images/task.png)

## Requisitos para Rodar o Projeto Localmente

### Node.js e npm:

- Verifique se você tem o Node.js instalado. Caso contrário, faça o download e instale a versão mais recente do Node.js.
- O npm (Node Package Manager) é instalado automaticamente com o Node.js.

### Git:

- Certifique-se de ter o Git instalado em sua máquina. Se não tiver, você pode baixá-lo aqui.

### Editor de Texto ou IDE:

- Escolha um editor de texto ou uma IDE (Ambiente de Desenvolvimento Integrado) para trabalhar no código. Alguns exemplos populares incluem o Visual Studio Code, Sublime Text e Atom.

### Navegador Web:

- Você precisará de um navegador web para visualizar o aplicativo localmente. Recomendamos o uso do Google Chrome, Mozilla Firefox ou Microsoft Edge.

### Conta no Firebase Console no plano Blaze:

- O projeto Weatherio consome dados do storage, função paga por utilização, dos serviços do Firebase. Crie uma conta gratuita em OpenWeatherMap, cadastre seu cartão e obtenha uma chave de API (API key).

## Rodar o Projeto Localmente

**Clone o projeto**

```bash
  git clone https://github.com/MarcioJorgeMelo/tarefas-nextJS.git
```

**Abra o projeto no VSCode**

```bash
  code .
```

**Instale as dependências**

```bash
  npm install # Instala as dependências (se ainda não tiver feito)
```

**Abra com o React Server**

```bash
  npm run dev # Inicia o servidor Next
```

## Autores

- [@MarcioJorgeMelo](https://github.com/MarcioJorgeMelo)

## Licença

- [MIT](https://choosealicense.com/licenses/mit/)
