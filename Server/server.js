const express = require('express');
const Promise = require('bluebird');
const db = require('sqlite');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const DataLoader = require('dataloader');
const dbContext = require('./db/db-context')(db);

const app = express();
app.use(cors({origin: 'http://localhost:5000'}));

 app.use('/graphql', (req, res) => {
    const loaders = {
        patientMedications: new DataLoader(dbContext.getPatientMedications)
      };
    graphqlHTTP({
      schema: schema,
      graphiql: true,
      context: { dbCtx: dbContext, loaders }
    })(req, res);
  });

app.use('/', function (req, res) {
  res.send('Simple web server')
});

Promise.resolve()
  .then(() => db.open('./EHR.sqlite', {Promise, verbose: true}))
  .then(() => db.driver.on('trace', console.log))
  .catch(err => console.error(err.stack))
  .finally(() => app.listen(5050));

console.log('Running a GraphQL API server at localhost:5050/graphql');