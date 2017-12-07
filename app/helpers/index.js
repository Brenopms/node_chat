'use strict';

const router = require('express').Router();

//iterate through the routes object and mout the routes
let _registerRoutes = (routes, method) => {
	for(let key in routes){
		if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)){
			_registerRoutes(routes[key], key)
		}

		else {
			// Register the router
			if(method === 'get'){
				router.get(key, routes[key]);
			} 

			else if (method === 'post'){
				router.post(key, routes[key]);

			}
		}
	}
}

let route = routes => {
	_registerRoutes(routes);
	return router;
}

module.exports =  {
	route
}
