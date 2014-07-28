/**
 * @api {get} /events/:id Cherche un événement par ID
 * @apiName GetUser
 * @apiGroup Events
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {post} /events Modifier un événement
 * @apiName UpdateEvent
 * @apiGroup Events
 */

/**
 * @api {delete} /events Supprimer un événement
 * @apiName DeleteEvent
 * @apiGroup Events
 */