// ------------------------------------------------------------------------------------------
// Shortcut for fetch users params
// Include this structure if you need params used as filter
// ------------------------------------------------------------------------------------------
/**
 * @apiDefineStructure fetchUsersParams
 * @apiParam (urlParam) {Number} [id] Search by ID.
 * @apiParam (urlParam) {String} [seniority_sort] (asc/desc) Search by recent or old created accounts.
 * @apiParam (urlParam) {String} [firstname] Search by firstname.
 * @apiParam (urlParam) {String} [lastname] Search by lastname.
 * @apiParam (urlParam) {String} [firstname_sort] (asc/desc).
 * @apiParam (urlParam) {String} [lastname_sort] (asc/desc).
 * @apiParam (urlParam) {String} [firstname_like] Search by firstname with LIKE condition. Value example: "ax" will return "maxime" or "max".
 * @apiParam (urlParam) {String} [lastname_like] Search by lastname with LIKE condition. Value example: "re" will return "bret" or "breton".
 */


// ------------------------------------------------------------------------------------------
// Fetch one
//
//  - UserController.find()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/:id Find one user
 * @apiName FindUser
 * @apiGroup Users
 * @apiGroupDescription API relatives to users and in more explicitly way accounts.
 * @apiDescription Find a user by its ID
 * <br/><b style="color:green;">Throw valid response:</b> 200.
 * <br/><b style="color:red;">Throw error response:</b> 400, 401, 403, 404.
 *
 * @apiPermission authenticated
 *
 * @apiParam {Number} id User's ID
 * @apiExample Use example
 * GET http://localhost/users/15
 *
 * @apiSuccessStructure FindSuccess
 */
// ------------------------------------------------------------------------------------------
// Fetch all
//
//  - UserController.findMultiple()
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users Find users
 * @apiName FindMultipleUsers
 * @apiGroup Users
 * @apiPermission authenticated
 * @apiDescription Fetch group of users with criterias. The response is never empty and in worst case you will get an empty object.
 * <br/><b style="color:green;">Throw valid response:</b> 200.
 * <br/><b style="color:red;">Throw error response:</b> 400, 401, 403.
 *
 * @apiStructure fetchUsersParams
 * @apiExample Use example
 * GET http://localhost/users
 * GET http://localhost/users?sort=asc&firstname=maxime
 *
 * @apiSuccessStructure FindMultipleSuccess
 */
// ------------------------------------------------------------------------------------------
// Create one
//
//  - UserController.create()
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /users Create one user
 * @apiName CreateUser
 * @apiGroup Users
 * @apiPermission guest
 * @apiDescription Create one user and retrieve the created object. A user is designed by a unique email.
 * If the user exist or one of primary field is already taken then the response will be 409.
 * <br/><b style="color:green;">Throw valid response:</b> 201.
 * <br/><b style="color:red;">Throw error response:</b> 400, 409.
 *
 * @apiParam (dataParam) {String} email Should be unique.
 * @apiParam (dataParam) {String} password This password is the md5 hashed + salted password.
 * @apiParam (dataParam) {String} [firstname]
 * @apiParam (dataParam) {String} [lastname]
 * @apiParam (dataParam) {String} [phone] Must be in this form: +33656565656 with (+??) as the country identifier.
 * @apiParam (dataParam) {String} [api_key] <b>Admin.</b> Force api key value.
 * @apiParam (dataParam) {String} [role_id] <b>Admin.</b> force role ID value.
 * @apiExample Use example
 * POST http://localhost/users
 * form-data:
 * ----------
 * email: xmax54@gmail.com
 * password: password
 *
 * @apiSuccessStructure CreateSuccess
 *
 */
// ------------------------------------------------------------------------------------------
// Update one
//
//  Description:    Allow to change user data. Preference should be changed here.
//  Task:           UserController.update()
// ------------------------------------------------------------------------------------------
/**
 * @api {put} /users Update one user
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiPermission authenticated accountOwner admin
 * @apiDescription Update an user and get it back. A generated reset token is needed to update password, see the designed method.
 * <br/><b style="color:green;">Throw valid response:</b> 200.
 * <br/><b style="color:red;">Throw error response:</b> 400, 401, 403.
 *
 * @apiParam (dataParam) {String} email <b>Admin.</b>
 * @apiParam (dataParam) {String} [password] A token is required to update password. This password is the md5 hashed + salted password.
 * @apiParam (dataParam) {String} [password_token] Required token to update password.
 * @apiParam (dataParam) {String} [firstname]
 * @apiParam (dataParam) {String} [lastname]
 * @apiParam (dataParam) {String} [phone]
 * @apiParam (dataParam) {String} [preference_foo] Change the preference foo
 * @apiExample Use example
 * PUT http://localhost/users
 * form-data:
 * ----------
 * email: xmax54@gmail.com
 * password: password
 *
 * @apiSuccessStructure UpdateSuccess
 *
 */
// ------------------------------------------------------------------------------------------
// Delete one
//
//  - UserController.delete()
// ------------------------------------------------------------------------------------------
/**
 * @api {delete} /users/:id Delete one user
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiPermission accountOwner admin
 * @apiDescription To delete a user you must have correct rights.
 * <br/><b style="color:green;">Throw valid response:</b> 204.
 * <br/><b style="color:red;">Throw error response:</b> 400, 401, 403.
 *
 * @apiParam (urlParams) {Number} id User's ID.
 * @apiExample Use example
 * DELETE http://localhost/users/15
 *
 * @apiSuccessStructure DeleteSuccess
 */
// ------------------------------------------------------------------------------------------
// Send reset token password of one user
//
//  - UserController.patch()
// ------------------------------------------------------------------------------------------
/**
 * @api {patch} /users/:id Generate a user's pwd reset token
 * @apiName GenerateUserResetTokenPassword
 * @apiGroup Users
 * @apiPermission authenticated accountOwner admin
 * @apiDescription Generate a password reset token for the designed user. This token can be used later to update the user password.
 * <br/><b style="color:green;">Throw valid response:</b> 204.
 * <br/><b style="color:red;">Throw error response:</b> 400, 401, 403.
 *
 * @apiParamTitle (formData) Parameters (Form Data)
 * @apiParam (formData) {Boolean} reset_password true / false
 * @apiExample Use example
 * PATCH http://localhost/users/15
 * form-data:
 * ----------
 * reset_password=true
 *
 * @apiSuccessStructure PatchSuccess
 */
