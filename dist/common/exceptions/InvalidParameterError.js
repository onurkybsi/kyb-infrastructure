"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents errors occurred when invalid parameters passed to a function
 */
class InvalidParameterError extends Error {
    constructor(invalidParameterName, invalidParameterValue) {
        super(`${invalidParameterName} is not valid: ${invalidParameterValue}`);
    }
}
exports.default = InvalidParameterError;
