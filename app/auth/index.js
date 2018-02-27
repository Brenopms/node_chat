'use strict';
const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
    let authProcessor =  (accessToken, refreshToken, profile, done) => {
        //Find a user in the local db using profile.id
        //if the user if found, return the user data using done()
        //if the user is not found, create one in the local db and return
    };
    passport.use(new FacebookStrategy(config.fb, authProcessor));
}