const express = require('express');
const Promise = require('bluebird');
const db = require('sqlite');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js'); 
const cors = require('cors');

const app = express();
app.use(cors({origin: 'http://localhost:5000'}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {db}
}));
 
Promise.resolve()
  .then(() => db.open('./EHR.sqlite', { Promise }))
  //.then(() => db.migrate({ force: 'last' }))
  .catch(err => console.error(err.stack))
  .finally(() => app.listen(5050));

console.log('Running a GraphQL API server at localhost:5050/graphql');