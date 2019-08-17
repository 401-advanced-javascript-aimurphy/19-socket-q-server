'use strict';
require('dotenv').config();

const Q = require('@nmq/q/client');
 
const network = new Q('network');
 
network.subscribe('attack', (payload) => {
  console.log('Shields Up!', payload);
});