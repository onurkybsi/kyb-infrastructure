"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const HttpUtilities_1 = require("./HttpUtilities");
const InvalidParameterError_1 = require("../../common/exceptions/InvalidParameterError");
const StringHelper = require("../StringUtilities");
/**
 * A simple module for HTTP requests
 *  @author Onur Kayabasi
 */
class HttpClient {
    constructor(baseURL) {
        /**
         * Sends a HTTP request by parameters
         * @param {HttpMethods}  method - Method of HTTP request
         * @param {string}  path - Request path to send
         * @param {any}  data - Request body
         * @param {any}  params - Request parameters
         * @return {Promise<HttpResponse>}  params - Response of request
         * @author Onur Kayabasi
         */
        this.SendRequest = (method, path, body = undefined, params = undefined) => __awaiter(this, void 0, void 0, function* () {
            this.validateSendRequestParameters(path);
            try {
                let responseFromWebService = yield axios_1.default.request({
                    method: method,
                    url: `${this.baseURL}${path}`,
                    data: body,
                    params: params
                });
                return {
                    isSuccessful: HttpUtilities_1.default.checkHttpStatusCodeIsSuccessful(responseFromWebService.status),
                    statusCode: responseFromWebService.status,
                    body: responseFromWebService.data
                };
            }
            catch (err) {
                return {
                    isSuccessful: false,
                };
            }
        });
        this.validateSendRequestParameters = (path) => {
            if (!StringHelper.isValid(path))
                throw new InvalidParameterError_1.default("baseUrl", path);
        };
        this.validateBaseUrl(baseURL);
        this.baseURL = baseURL;
    }
    validateBaseUrl(baseURL) {
        if (!StringHelper.isValid(baseURL))
            throw new InvalidParameterError_1.default("baseUrl", baseURL);
    }
}
exports.default = HttpClient;
