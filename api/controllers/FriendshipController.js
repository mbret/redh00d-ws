(function(){

    'use strict';

    var validator = require('validator');

    module.exports = {

        /**
         * Find a friendship request
         * @todo write this method
         */
        find: function(req, res){
            return res.send(501);
        },

        /**
         * Find friendships requests
         * @todo write this method
         */
        findMultiple: function(req, res){
            return res.send(501);
        },

        /**
         * Remove the current friendship with given friend
         * - delete the request. does not take care of request state.
         * @todo write this method
         */
        delete: function(req, res){
            return res.send(501);
        },

        /**
         * Create a friendship request
         * - Create a request with status as waiting
         * @todo write this method
         * @todo test if request already exist
         */
        create: function(req, res){

            sails.models.friendship
                .create({
                    fromUser: 1,
                    toUser: 1,
                    status: 'requested',
                })
                .then(function(){

                })
                .catch(res.serverError);
        },

        /**
         * Not used yet
         *
         */
        update: function(req, res){
            return res.send(501);
        },


        /* ========================================================
         *
         *              Friends relative part
         *
         * ======================================================== */

        /**
         * Find friends relative to user
         * @todo write this method
         */
        findFriends: function(req, res){
            var id = req.param('userid', null);
            if( !validator.isNumeric(id) ){
                return res.badRequest();
            }

            // get user friends
            sails.models.user.findFriends(id)
                .then(function(friends){
                    return res.ok(friends);
                })
                .catch(res.serverError);
        }

    }


})();