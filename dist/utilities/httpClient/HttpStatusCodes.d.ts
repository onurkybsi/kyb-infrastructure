/**
 * Enum representations of HTTP status codes
 * @author Onur Kayabasi
 */
declare enum HttpStatusCode {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    MultipleChoices = 300,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    InternalServerError = 500,
    ServerUnavaliable = 503,
    GatewayTimeout = 504
}
export default HttpStatusCode;
