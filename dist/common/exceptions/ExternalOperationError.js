"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents errors occurred when external operation is processing
 */
class ExternalOperationError extends Error {
    constructor(errorMessage) {
        super(errorMessage);
    }
}
exports.default = ExternalOperationError;
