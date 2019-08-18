# LAB - 19

## Project Socket.io-Q!

### Author: Ai

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-aimurphy/19-socket-q-server/pull/2)
* [![Build Status](https://travis-ci.com/401-advanced-javascript-aimurphy/19-socket-q-server.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-aimurphy/19-socket-q-server)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](./) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `server.js`
manages queues and events. Listens for publisher and passes on to loggers
#### `netlogger.js`
subscribes to server and listens for attacks
#### `dblogger.js`
subscribes to server and listens for create and delete
#### `pub.js`
sends messages to server


### Setup
You can either run all modules locally or run the loggers and publisher locally and connect to the cloud based server*
#### `.env` requirements
* PORT 3333 || https://socketnpme.azurewebsites.net

#### Running the app
* *`server.js` is deployed to Microsoft's Azure cloud service
  * it is temporarily stopped because I am still learning Azure's pricing structure.
* `node dblogger.js` will run the database logger that listens for 'create' and 'delete' events.
* `node netlogger.js` will run the network logger that listens for 'attack' events.
* `node pub.js` publishes the events listened for by net and db loggers.

#### Tests

