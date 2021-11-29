import HttpMethods from "./HttpMethods";
import HttpResponse from "./HttpResponse";
/**
 * A simple module for HTTP requests
 *  @author Onur Kayabasi
 */
export default class HttpClient {
    private baseURL;
    constructor(baseURL: string);
    private validateBaseUrl;
    /**
     * Sends a HTTP request by parameters
     * @param {HttpMethods}  method - Method of HTTP request
     * @param {string}  path - Request path to send
     * @param {any}  data - Request body
     * @param {any}  params - Request parameters
     * @return {Promise<HttpResponse>}  params - Response of request
     * @author Onur Kayabasi
     */
    SendRequest: (method: HttpMethods, path: string, body?: any, params?: any) => Promise<HttpResponse>;
    private validateSendRequestParameters;
}
