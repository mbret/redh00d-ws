// ------------------------------------------------------------------------------------------
//                                      Events
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Shortcut for fetch events params
// Include this structure if you need params used as filter
// ------------------------------------------------------------------------------------------
/**
 * @apiDefineStructure fetchEventsParams
 * @apiParam (urlParam) {Number} [id] Use it to retrieve only one event with its ID.
 * @apiParam (urlParam) {String} [eventName]
 * @apiParam (urlParam) {String} [eventDate]
 * @apiParam (urlParam) {String} [eventPlace]
 * @apiParam (urlParam) {String} [sort] get the result sorted
 */



// ------------------------------------------------------------------------------------------
// Fetch one
//
//  - EventController.find()
// ------------------------------------------------------------------------------------------

/**
 * @api {get} /events/:id Search for an Event by its ID
 * @apiName FindEvent
 * @apiGroup Events
 * @apiGroupDescription API corresponding to Event
 * @apiDescription Find an event by its ID
 * <br/><b>Throw error:</b> 404
 *
 * @apiParam {Number} id Event unique ID.
 * @apiExample Use example
 * get http://localhost/events/15
 *
 * @apiSuccessStructure FindSuccess
 *
 */

// ------------------------------------------------------------------------------------------
// Fetch all
//
// - EventController.findMultiple()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /events look for Events
 * @apiName FindMultipleEvents
 * @apiGroup Events
 * @apiPermission authenticated
 * @apiDescription look for Events
 * <br/><b>Throw error:</b>
 *
 * @apiStructure fetchEventsParams
 * @apiExample Example 
 * get http://localhost/events
 * get http://localhost/users?sort=asc&eventDate=204-12-24
 *
 * @apiSuccessStructure FindMultipleSuccess
 */
// ------------------------------------------------------------------------------------------
// Fetch all from user
//
//  Description:    Search events from a user. Redirect to GET /events and add a field for
//                  the author filter.
//  Task:           EventController.findFromUser()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/:id/events look for Events from a user
 * @apiName FindMultipleUserEvents
 * @apiGroup Events
 * @apiPermission authenticated
 * @apiDescription @todo
 *
 * @todo params
 * @todo example
 *
 * @apiSuccessStructure FindMultipleSuccess
 */
// ------------------------------------------------------------------------------------------
// Create
//
//  - EventController.create()
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /users/:id/events Create an event
 * @apiName CreateEvent
 * @apiGroup Events
 * @apiPermission authenticated
 * @apiDescription Create an event which is retrieve if creation was a success.
 * <br/><b>Throw error:</b> 400.
 *
 * @apiParam (dataParam) {String} name
 * @apiParam (dataParam) {String} [description]
 * @apiParam (dataParam) {String} [place]
 * @apiParam (dataParam) {String} date
 * @apiExample Use example
 * post http://localhost/events
 * form-data: name=MyEvent&date=2014-12-24
 *
 * @apiSuccessStructure CreateSuccess
 *
 * @apiErrorStructure BadRequestError
 */
// ------------------------------------------------------------------------------------------
// Update
//
// EventController.update()
// ------------------------------------------------------------------------------------------
/**
 * @api {put} /events Update an event
 * @apiName UpdateEvent
 * @apiGroup Events
 * @apiPermission authenticated eventOwner
 * @apiDescription update an event
 * <br/><b>Throw error:</b> 400.
 *
 * @apiParam (dataParam) {String} name
 * @apiParam (dataParam) {String} [description] A token is required to update password.
 * @apiParam (dataParam) {String} [place] Required token to update password.
 * @apiParam (dataParam) {String} date
 * @apiExample Use example
 * put http://localhost/events
 * form-data: description=My_will_such_as_hell&place=toHome
 *
 * @apiSuccessStructure UpdateSuccess
 *
 */

// ------------------------------------------------------------------------------------------
// Delete one
//
//  - EventController.delete()
// ------------------------------------------------------------------------------------------

/**
 * @api {delete} /users/:id/events/:id Delete an Event
 * @apiName DeleteEvent
 * @apiGroup Events 
 * @apiPermission authenticated eventOwner
 * @apiDescription Delete an event
 * <br/><b>Throw error:</b> 404.
 *
 * @apiParam {Number} id Event's ID
 * @apiExample Use example
 * delete http://localhost/events/15
 *
 * @apiSuccessStructure DeleteSuccess
 */
// ------------------------------------------------------------------------------------------
//                                      Members
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Create an event invitation
//
//  - EventController.createEventMemberInvitation()
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /events/:id/invitations create an event invitation
 * @apiName CreateEventInvitation
 * @apiGroup Events
 * @apiPermission authenticated
 * @apiDescription Create one event invitation.
 * <br/><b>Throw error:</b> 400.
 *
 * @apiParam (dataParam) {Number} target_id
 * @apiExample Use example
 * post http://localhost/events/15/invitations
 * form-data: target_id=36
 *
 * @apiSuccessStructure CreateSuccess
 * @todo
 */
// ------------------------------------------------------------------------------------------
// Update a project invitation
//
//  Description:    Allow accept/cancel/..
//                  Note that target can cancel/accept and sender can only cancel
//  Task:           UserController.updateProjectMemberInvitation()
// ------------------------------------------------------------------------------------------
/**
 * @api {put} /events/:id/invitations Update event invitation
 * @apiName ToDo
 * @apiGroup Events
 * @todo
 */
// ------------------------------------------------------------------------------------------
// Remove one project's member
//
//  - UserController.deleteProjectMember()
// ------------------------------------------------------------------------------------------
/**
 * @api {delete} /events/:id/members/:id Remove one user from an event
 * @apiName ToDo
 * @apiGroup Events
 * @todo
 */
// ------------------------------------------------------------------------------------------
// Fetch multiple project's members
//
//  - UserController.findProjectMembers()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /events/:id/members Find one project's member
 * @apiName ToDo
 * @apiGroup Events
 * @todo
 */
// ------------------------------------------------------------------------------------------
// Fetch one project members
//
//  - UserController.findProjectMember()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /events/:id/members/:id Find project's members
 * @apiName ToDo
 * @apiGroup Events
 * @todo
 */