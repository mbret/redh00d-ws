var passport = require( "passport" ),
    BasicStrategy = require('passport-http').BasicStrategy;


/**
 * This is the basic authentication for the api.
 * Customer just need to include username/password values on Basic Auth request
 * Use only with https
 * @todo with api key
 */
passport.use(
    new BasicStrategy(
        function (email, password, done) {
            console.log(email, password);

            User.findOne( {email: email}, function (err, user) {
                if( err) return done(err);
                if( !user) return done( null, false );

                user.validatePassword(password, function(err, valid){
                    if(err) return done(err);
                    if( !valid ) return done(null, false);

                    // load grade for futur test
                    user.loadGrade( function(err){
                        if(err) return done(err);
                        return done(null, user);
                    } );

                });
            });
    })
);