'use strict';

const express = require('express');
const app = express();
const chat = require('./app');

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chat.session);

app.use('/', chat.router);

app.listen(app.get('port'), () => {
	console.log('Chat running on port:', app.get('port'));
});