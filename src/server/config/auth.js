import flash                          from 'connect-flash';
import session                        from 'express-session';
import { Strategy as localStrategy }  from 'passport-local';

import {  }      from './secrets';


export function auth(app, passport) {
  // Initialize session
  // NOTE: ******* MAKE THE COOKIE SECURE FOR DEPLOYMENT *******
  app.use(session({
    cookie: {
      maxAge: 3600000
    },
    resave: false,
    saveUninitialized: true,
    secret: 'definitelyasecret',
    store: 
  }));

  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Enable error flashes
  app.use(flash());

  // Configure passport strategies
  passport.use(new localStrategy({
      usernameField: 'tenant_email',
      passwordField: 'tenant_password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user)
  });
};
