require('dotenv').config();

const wsCtrl = require('./lib/ws-controller');
const cecCtrl = require('./lib/cec-controller');

// Handle client request for cec command
wsCtrl.on('onConnectionMessage', (message)=>wsCtrl.server.broadcastUTF(message.utf8Data));

// broadcast route change
cecCtrl.on('routeChange', (fromSource, toSource)=>{
	let msg = JSON.stringify({fromSource, toSource});
	wsCtrl.server.broadcastUTF(msg)
});

wsServer.config.httpServer = server;
const wsInstance = new WebSocketServer(wsServer.config);

// handle request
wsInstance.on('request', (request)=>wsServer.handleRequest(request))
