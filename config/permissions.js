/**
 *
 */


module.exports.permissions = {

    // They match the role inside database
    roles: {
        guest: {
            parent: null
        },

        user: {
            parent: 'guest'
        },

        admin: {
            parent: 'guest'
        }
    },

    // They match routes and controller. Ex: /users -> UserController is converted to "user" from req.options.controller
    resources: {
        user: ['create', 'find', 'findmultiple']
    },

    // ACL must use correct roles and resources as defined above
    acl: {
        guest: {
            allow: {
                user: ['create']
            }
        },
        user: {
            allow: {
                user: ['find','findmultiple']
            },
            deny: {
                user: ['create']
            }
        },
        admin: {

        }
    }

//    extractResourceNameFromController: function( controllerName ){
//        var tmp = controllerName.toLowerCase();
//        tmp = tmp.substr(0, tmp.indexOf("controller"));
//        return tmp;
//    }
};
