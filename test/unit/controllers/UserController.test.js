var request = require('supertest');
var async = require("async");

describe('UserController', function() {

    var authorization = "Basic dXNlckB1c2VyLmNvbTpwYXNzd29yZA=="; // user@user.com / password
//    var request = request(sails.hooks.http.app);

    before(function(done){
        done();
    })

    beforeEach(function(done){
        done();
    })

    after(function(done){
        done();
    })

    afterEach(function(done){
        done();
    })

    describe("All", function(){

        it('should respond with json', function(done){
            async.series([
                function(callback){
                    request(sails.hooks.http.app).get('/api/users/1').set('Accept', 'application/json').set('Authorization', authorization)
                        .expect('Content-Type', /json/).end(callback);
                },
                function(callback){
                    request(sails.hooks.http.app).get('/api/users').set('Accept', 'application/json').set('Authorization', authorization)
                        .expect('Content-Type', /json/).end(callback);
                },
                function(callback){
                    request(sails.hooks.http.app).post('/api/users').set('Accept', 'application/json').set('Authorization', authorization)
                        .expect('Content-Type', /json/).end(callback);
                },
//                function(callback){
//                    request(sails.hooks.http.app).del('/api/users/10').set('Accept', 'application/json').set('Authorization', authorization)
//                        .expect('Content-Type', /json/).end(callback);
//                },
            ], function(err, results){
                if(err) return done(err);
                done();
            });
        });

    });

    describe("GET /users", function(){

        it('should respond user with ID 1', function(done){
            request(sails.hooks.http.app).get('/api/users/1').set('Accept', 'application/json').set('Authorization', authorization)
                .expect(function(res){
                    if( !res.body.user || !res.body.user.ID == 1 ) throw new Error("No user or wrong user");
                })
                .end(done);
        });

        it('should respond 404', function(done){
            async.series([
                function(callback){
                    request(sails.hooks.http.app).get('/api/users/x').set('Accept', 'application/json').set('Authorization', authorization)
                        .expect(404).end(callback);
                },
                function(callback){
                    request(sails.hooks.http.app).get('/api/users/20').set('Accept', 'application/json').set('Authorization', authorization)
                        .expect(404).end(callback);
                }
            ], function(err, results){
                if(err) return done(err);
                done();
            });
        });

        it('should respond list of users', function(done){
            request(sails.hooks.http.app).get('/api/users').set('Accept', 'application/json').set('Authorization', authorization)
                .expect(function(res){
                    if( !res.body.users ) throw new Error("No users");
                })
                .end(done);
        })

    });

    describe("POST /users", function(){

        it('should respond Bad Request', function(done){
            async.series([
                function(callback){
                    request(sails.hooks.http.app).post('/api/users')
                        .expect(400).end(callback);
                },
                function(callback){
                    request(sails.hooks.http.app).post('/api/users').send({email: 'email@email.com'})
                        .expect(400).end(callback);
                }
            ], function(err, results){
                if(err) return done(err);
                done();
            });
        });

        it('should create the user with email email@email.com', function(done){
            request(sails.hooks.http.app).post('/api/users').send({email: 'email@email.com', password: 'password'})
                .expect(201)
                .expect(function(res){
                    if( !res.body.user || !res.body.user.email == 'email@email.com' ) throw new Error("User not created");
                })
                .end(done);
        });

        it('should not be able to create a new user', function(done){
            // user logged not allowed
            request(sails.hooks.http.app).post('/api/users').set('Authorization', authorization).expect(403).end(done);
        });

    })

    describe("DELETE /users", function(){

        it('should delete the user with ID 3', function(done){
            request(sails.hooks.http.app).del('/api/users/3').set('Authorization', authorization)
                .expect(204).end(done);
        })

        /**
         * User with email user@user.com ID:1 should not be able to delete another user
         */
        it('should not be able to delete another user', function(done){
            request(sails.hooks.http.app).del('/api/users/3').set('Authorization', authorization)
                .expect(403).end(done);
        })
    })

});