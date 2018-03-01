'use strict';

//Social Authentication Logic
require('./auth')();

//Create an IO Server instance

let ioServer = app => {
	const server = require('http').Server(app);
	const io = require('socket.io')(server);
	require('./socket')(io);
	return server;
}

module.exports = {
	router: require('./router')(),
	session: require('./sessions'),
	ioServer
}