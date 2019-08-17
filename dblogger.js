'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');
 
const db = new Q('database');

db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});
 
db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});