'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/' , (req, res, next) => {
	res.render('login');
});


app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the dashboard page! Middleware says: ' + req.hello + '</h1>');
});

app.listen(app.get('port'), () => {
	console.log('Chat running on port:', app.get('port'));
});