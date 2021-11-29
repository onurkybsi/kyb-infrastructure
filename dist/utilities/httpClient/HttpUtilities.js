"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides various functionalities for HTTP protocol operations
 * @author Onur Kayabasi
 */
const HttpStatusCodes_1 = require("./HttpStatusCodes");
/**
 * Checks whether given status code is one of successful HTTP status codes
 * @param statusCode HTTP status code
 * @returns true if status code is successful
 */
const checkHttpStatusCodeIsSuccessful = (statusCode) => statusCode >= HttpStatusCodes_1.default.OK && statusCode < HttpStatusCodes_1.default.MultipleChoices;
exports.default = { checkHttpStatusCodeIsSuccessful };
