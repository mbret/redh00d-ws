/**
 * isAllowed
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user.
 *                 This policies check if the authentication by BasicAuth is ok. If user is authenticated then the user is placed inside req.user
 *                 Check Passport for more info about BasicAuth.
 * @docs        :: http://sailsjs.org/#!documentation/policies, https://github.com/jaredhanson/passport
 *
 */

module.exports = function isAllowedWithPolicies(req, res, next) {

    // They are already formatted from sails to match with permissions
    var resource = req.options.controller;
    var action = req.options.action;
    var roleName = (!req.user) ? 'guest' : req.user.role.name;
    var isAuthenticated = (!req.user) ? false : req.user.isAuthenticated;

    
    sails.log.info('isAllowedWithPolicies -> check ', roleName, resource, action);
    // test permission
    //sails.log.info('isAllowed -> req.user -> ', req.user);
    if( PermissionsService.isAllowed( roleName, resource, action ) ){
        return next();
    }
    else{
        // case of reject maybe user is not authenticate ?
        if( ! isAuthenticated ){
            //sails.log.info("isAllowed -> request not authenticated");
            return res.unauthorized();
        }
        else return res.forbidden();
    }


};