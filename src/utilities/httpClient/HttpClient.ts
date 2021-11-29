import HttpMethods from "./HttpMethods";
import HttpResponse from "./HttpResponse";
import axios from "axios";
import HttpHelper from "./HttpUtilities";
import InvalidParameterError from "../../common/exceptions/InvalidParameterError";
import * as StringHelper from "../StringUtilities";

/**
 * A simple module for HTTP requests
 *  @author Onur Kayabasi
 */
export default class HttpClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.validateBaseUrl(baseURL);
        this.baseURL = baseURL;
    }

    private validateBaseUrl(baseURL: string): void {
        if (!StringHelper.isValid(baseURL))
            throw new InvalidParameterError("baseUrl", baseURL);
    }

    /**
     * Sends a HTTP request by parameters
     * @param {HttpMethods}  method - Method of HTTP request
     * @param {string}  path - Request path to send
     * @param {any}  data - Request body
     * @param {any}  params - Request parameters
     * @return {Promise<HttpResponse>}  params - Response of request
     * @author Onur Kayabasi
     */
    public SendRequest = async (method: HttpMethods, path: string, body: any = undefined, params: any = undefined): Promise<HttpResponse> => {
        this.validateSendRequestParameters(path);
        try {
            let responseFromWebService = await axios.request({
                method: method,
                url: `${this.baseURL}${path}`,
                data: body,
                params: params
            });

            return {
                isSuccessful: HttpHelper.checkHttpStatusCodeIsSuccessful(
                    responseFromWebService.status
                ),
                statusCode: responseFromWebService.status,
                body: responseFromWebService.data
            }
        } catch (err) {
            return {
                isSuccessful: false,
            }
        }
    };

    private validateSendRequestParameters = (path: string): void => {
        if (!StringHelper.isValid(path))
            throw new InvalidParameterError("baseUrl", path);
    }
}