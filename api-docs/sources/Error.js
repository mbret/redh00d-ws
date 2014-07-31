
/**
 * @api {} Errors codes
 * @apiName ErroCode
 * @apiGroup Errors
 * @apiDescription redh00d use many way to tell whether an error occurs and what was the error. The most reliable and trustable way is the error code. Errors
 *  codes are fixed and you can only manage with them to treat errors on customer side. Just read the code and display the messages you want.
 *
 * @apiHeaderTitle (Errors) Codes detailed.
 * @apiHeader (Errors) {String} code
 * @apiHeader (Errors) {String} code.resourceNotFound La ressource recherchée n'a pas été trouvée.
 * @apiHeader (Errors) {String} code.modelNotFound Le model / classe recherché(e) n'a pas été trouvé(e).
 * @apiHeader (Errors) {String} code.pageNotFound La page demandée n'a pas été trouvée.
 * @apiHeader (Errors) {String} code.dbUnavailable .
 * @apiHeader (Errors) {String} code.noAccessRights .
 * @apiHeader (Errors) {String} code.emailArleadyTaken .
 *
 */

/**
 * @api {} Errors responses
 * @apiName ErrorResponse
 * @apiGroup Errors
 * @apiDescription redh00d uses conventional HTTP response codes to indicate success or failure of an API request.
 * <br/>In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error
 * <br/>that resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.), and
 * <br/>codes in the 5xx range indicate an error with redh00d servers.
 *
 * <br/><b>HTTP Status Code Summary:</b>
 * <br/><b>200 OK</b> - Everything worked as expected.
 * <br/><b>400 Bad Request</b> - Often missing a required parameter.
 * <br/><b>401 Unauthorized</b> - No valid API key provided.
 * <br/><b>402 Request Failed</b> - Parameters were valid but request failed.
 * <br/><b>405 Method not allowed</b> - Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID).
 * <br/><b>404 Not Found</b> - The requested item doesn't exist.
 * <br/><b>409 Conflict</b> - Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.
 * <br/><b>500, 502, 503, 504 Server errors</b> - any general error on the system.
 *
 * @apiErrorStructure CommonError
 * @apiErrorStructure BadRequestError
 * @apiErrorStructure NotFoundError
 * @apiErrorStructure forbiddenError
 * @apiErrorStructure ConflictError
 * @apiErrorStructure serverError
 *
 */
