/**
 * Created by Maxime on 19/07/2014.
 *
 * General config file used by application.
 * To retrieve this values just use sails.config.general.foo
 */

module.exports.general = {

    creators: [
        "Maxime Bret",
        "Baptiste Mulot"
    ],

    defaultUserRoleName: 'user',

    // Set this variable to true to initialize default values
//    initDatabase: false,

    version: '0.0.1',

    errors: {
        codes: {
            notFound: {
                label: "notFound",
                message: "Not found"
            },
            resourceNotFound: {
                label: "resourceNotFound",
                message: "Resource not found"
            },
            modelNotFound: {
                label: "modelNotFound",
                message: "Model not found"
            },
            pageNotFound: {
                label: "pageNotFound",
                message: "Page not found"
            },
            dbUnavailable: {
                label: "dbUnavailable",
                message: "Database unavailable"
            },
            accessForbidden: {
                label: "accessForbidden",
                message: "Access forbidden"
            },
            emailArleadyTaken: {
                label: "emailArleadyTaken",
                message: "Email already taken"
            },
            badAuthentication: {
                label: "badAuthentication",
                message: "Bad authentication"
            },
            serverError: {
                label: "serverError",
                message: "Server error"
            }
            // ...
        }
    },

    mail: {
        ssl: true,
        port: 465,
        host: 'host',
        to: 'xmax54@gmail.com',
        prepend_subject: 'Happy Contact Form | ',
        user: 'user',
        pass: 'pass',

        // Default sender name and address for transactional emails
        from: {
            name: 'Maxime',
            email: 'xmax54@gmail.com'
        }
    }

};
