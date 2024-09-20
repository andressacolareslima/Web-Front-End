<h3 align="center">Desenvolvimento Web 2024.1 - Front-end com React e UI com Material UI</h3>

> Grupo: Andressa Colares | Matrícula: 471151

# 💸 Registro de Gastos

Este é um simples aplicativo de **Registro de Gastos** desenvolvido em **React**. Ele permite que você adicione, visualize e remova registros de despesas, além de calcular automaticamente o valor total gasto. Os dados são persistidos localmente usando o `localStorage` para que suas despesas permaneçam salvas entre as sessões do navegador.

## 🎯 Funcionalidades

- ✅ Adicionar novos registros de gastos (nome, data, valor).
- 📝 Exibir todos os gastos registrados.
- 🗑️ Remover registros de gastos.
- 💰 Calcular e exibir o valor total gasto.
- 💾 Persistência local usando `localStorage`.

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React**: Framework principal para construir a interface.
- 💅 **Material UI** : Para estilização dos componentes e uma UI moderna.
- 💾 **LocalStorage**: Para armazenar os gastos localmente no navegador.

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Você precisará ter o **Node.js** e o **npm** (ou **yarn**) instalados. 

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passo a passo

1. **Clone o repositório**
   ```
   git clone https://github.com/andressacolareslima/FRONT-END-COM-REACT-DEV-WEB/tree/master

2. **Entre na pasta do projeto**
  ```
  cd web-dev-front-end
  ```

3. **Instale as dependências**

  ```
  npm install
  ```
ou com yarn
  ```
  yarn install
  ```
4. **Execute o aplicativo**

  ```
  npm start
  ```
ou com yarn
  ```
  yarn start
  ```
O aplicativo estará rodando em ```http://localhost:3000.```

🧭 **Como usar o aplicativo**
- Abra o aplicativo em seu navegador.
- Insira o nome da despesa, a data e o valor.
- Clique em Adicionar Gasto.
- O gasto será exibido na lista de gastos e o valor total será atualizado automaticamente.
- Para remover um gasto, basta clicar no ícone 🗑️ ao lado da despesa.
- Todos os dados serão salvos automaticamente no localStorage do navegador.
