'use strict';
const h = require('../helpers');
const passport = require('passport');

module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login');
			},

			'/rooms': (req, res, next) => {
				res.render('rooms', {
					user: req.user
				});
			},
			'/chat': (req, res, next) => {
				res.render('chatroom');
			},
			'/getsession': (req, res, next) => {
				res.send('My favorite color:' + req.session.favColor);
			},
			'/setsession': (req, res, next) => {
				req.session.favColor = 'red';
				res.send('session set');
			},
			'/auth/facebook' : passport.authenticate('facebook'),
			'/auth/facebook/callback' : passport.authenticate('facebook', {
				successRedirect : '/rooms',
				failure: '/'
			}),
			'/auth.twitter': passport.authenticate('twitter'),
			'/auth/twitter/callback': passport.authenticate('twitter', {
				successRedirect : '/rooms',
				failure: '/'
			})

		},


		'post' : {

		},

		'NA' : (req, res, next) => {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}

	}


	return h.route(routes);
}