/**
 * This helper is useful to deal with response and get some useful method about.
 *
 * @type {{handleSend: handleSend}}
 */
module.exports = {

    /**
     * This method handle the response sending.
     *
     * @description :: Some extra information are injected inside data and the response is correctly send.
     *
     * @param req
     * @param res
     * @param data
     * @returns {*}
     */
    handleSend: function(req, res, data){

        if( ! data ) {
            data = {};
        }

        data.status = res.statusCode ;

        // add debug dump
        if( sails.config.environment === 'development' ){
            data._debug = {
                api_version: sails.config.all.version,
                creators: ["Maxime Bret"],
                default_user_role: sails.config.permissions.defaultRole,
                connection: sails.config.models.connection,
                init_db_each_launch: sails.config.database.initOnStartup,
                protect_json_response: sails.config.all.protectJsonData,
                environment: sails.config.environment,
                request: {
                    locale: res.locale,
                    host: req.host,
                    ip: req.ip,
                    connection_secure: req.secure,
                    ajax: req.xhr
                }
            }
        }

        return res.jsonx( data );
    },

    

    /**
     * Handle error responses.
     * - log response
     * - affect the default error information if something is missing
     * - call normal response handler
     * @param req
     * @param res
     * @param data
     * @param defaultErrorCode
     * @returns {*}
     */
    handleErrorSend: function(req, res, data, defaultErrorCode){
        var defaultMessage = sails.config.all.errors.codes[defaultErrorCode];

        if( !data ) data = {};

        if( !data.message ){
            if( data.code ){
                data.message = res.__( sails.config.all.errors.codes[data.code] );
            }
            else{
                data.message = res.__( defaultMessage );
            }
        }
        if( !data.code ) data.code = defaultErrorCode;

        return this.handleSend(req, res, data);
    }


};

// `sails` is not available out here
// (it doesn't exist yet)