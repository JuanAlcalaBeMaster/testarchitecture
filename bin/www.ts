/**
 * @author Juan David Alcala Sanchez
 * @file Principal file of the configuration server
 * @date 2021-12-10
 * @version 1.0.0
 */

import config from 'config';

/**
 * Module Dependencies
 */

const app = require('../app');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */
var port:string = config.get('server.port');

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error:any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  //console.log(`Listening on ${bind}`);
}

/**
 * Config Cors
 */
 function dynamicCors(configCors:any) {
  if(configCors.lenght == 1) {
    return {
      origin: configCors[0],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  } else {
    const whitelist = configCors;
    return {
      origin: ["https://localhost:3000", "http://localhost:3001"],
      optionsSuccessStatus: 200,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    }
  }
}

const configCors:any = config.get('server.cors');
let corsDynamic: string[] = configCors.split(":");
console.log('cors Generated, separeted for : if you wanna more cors only need add : between urls',corsDynamic);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

module.exports = {server}



