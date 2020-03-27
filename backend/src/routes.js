const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');

const routes = express.Router();

// routes.get('./ongs', async (request, response) => {
//    const ongs = await connection('ongs').select('*');

//    return response.json(ongs);
// });

// routes.post('/users', (request, response) =>{

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

// routes.post('/ongs', async (request, response) => {

   // const query = request.query;
   // const params = request.params;
   // const body = request.body;
   // const data = request.body;

   // const { name, email, whatsapp, city, uf } = request.body;
   // const id = crypto.randomBytes(4).toString('HEX');

   // await connection('ongs').insert({
   //    id,
   //    name,
   //    email,
   //    whatsapp,
   //    city,
   //    uf,
   // });

   // // console.log(data);

   // return response.json({
   //    id
   //    // evento: 'Semana OmniStack 11.0',
   //    // aluno: 'Welington S' 
   // });
// });

module.exports = routes;