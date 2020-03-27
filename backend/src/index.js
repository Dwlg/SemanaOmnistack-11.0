const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
/*
* Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET : Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * tipos de parâmetsos:
  * 
  * Query Params : Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params : Parâmetros utilizados para identificar recursos
  * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL : MongoDB, CouchDB, etc.
   */

/**
 * Driver : SELECT * FROM users;
 * Query Builder : table('users').select('*')
 */

// app.get('/users?name=jose&sobrenome=Junior', (request, response) =>{
// app.get('/users/:id', (request, response) =>{

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);