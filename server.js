'use strict';

const express = require('express');
const app = express();
const chat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chat.session);
app.use(passport.initialize());
app.use(passport.session());
app.use(require('morgan')('combined', {
	stream: {
		write: message => {
			//write to logs
			chat.logger.log('info', message);
		}
	}
}))

app.use('/', chat.router);

chat.ioServer(app).listen(app.get('port'), () => {
	console.log('Chat running on port:', app.get('port'));
});