/**
 * Provides various functionalities for HTTP protocol operations
 * @author Onur Kayabasi
 */

import HttpStatusCode from "./HttpStatusCodes";

/**
 * Checks whether given status code is one of successful HTTP status codes 
 * @param statusCode HTTP status code
 * @returns true if status code is successful
 */
const checkHttpStatusCodeIsSuccessful = (statusCode: number): boolean => statusCode >= HttpStatusCode.OK && statusCode < HttpStatusCode.MultipleChoices;

export default { checkHttpStatusCodeIsSuccessful }