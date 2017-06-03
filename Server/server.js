const express = require('express');
const Promise = require('bluebird');
const DataLoader = require('dataloader');
const db = require('sqlite');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
app.use(cors({origin: 'http://localhost:5000'}));

app.use('/', function (req, res) {
  res.send('Simple web server')
});

app.listen(5050);

console.log('Running a GraphQL API server at localhost:5050/graphql');