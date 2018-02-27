'use strict';
const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        h.findById(id)
            .then(user => done(null, user))
            .catch(error => console.log('Error when deserializing the user'));
    });

    let authProcessor =  (accessToken, refreshToken, profile, done) => {
        //Find a user in the local db using profile.id
        h.findOne(profile.id)
            .then((result) => {
                //if the user if found, return the user data using done()
                if(result){
                    done(null, result);
                } else {
                    //if the user is not found, create one in the local db and return
                    //Create a new user and return
                    h.createNewUser(profile)
                        .then(newChatUser => done(null, newChatUser))
                        .catch(error => console.log('Error when creating new user'))
                }
            })
    };
    passport.use(new FacebookStrategy(config.fb, authProcessor));
}