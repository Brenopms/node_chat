'use strict';

//Social Authentication Logic
require('./auth')();

module.exports = {
	router: require('./router')(),
	session: require('./sessions')
}