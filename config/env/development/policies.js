
module.exports.policies = {

    DevController: {
        '*': true
    },

    HelperController: {
        ping: true, // everyone can ping server
        authJWT: ['jwtAuth', 'isAuth'], // used to test jwt auth
        authBasic: ['basicAuth', 'isAuth'], // used to test basic auth
        authorizedGet: ['isAuthorized'], // used to test permission
        authorizedPost: ['isAuthorized'] // used to test permission
    }

};
