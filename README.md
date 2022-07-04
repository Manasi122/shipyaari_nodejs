# README

**VS Code extensions required :-**

1. ES Lint
2. Prettier 
3. Better Comments
4. Indent-rainbow
5. Vscode-icons


**Dev dependencies :-**

1. Add package.json file using command : `npm init` or `npm init -y`
  - To initialize npm and yes to all questionnaire
2. Install express using command : `npm install express` 
3. Install sequelize using command : `npm install sequelize`
  - To connect the database, you must create a Sequelize instance.
4. Install swagger-ui using command : `npm i swagger-ui-express`
  - Is used for viewing the live API documentation and test the API.
  - ## Follow the Open API 3.0 standards.
5. Install swagger-jsdoc using command : `npm i swagger-jsdoc`
  - Is used to create swagger documentation using comments.

**Project Structure :-**

- server.js — Main entry point
- config — to handle database configuration 
- models — to handle database entity, attributes and their datatypes
- controllers — to handle the REST API requests
- routes — to handle the Routing
- middleware — to handle the validation and authentication
- utils —to define the swagger

**Devlopment tools requirement and steps to Run :-**

1. Required NodeJS, NPM and MySQL.
2. Run command in terminal in root path : `npm install`
3. Run command in terminal in root path after finish installtion : `npm run server`
