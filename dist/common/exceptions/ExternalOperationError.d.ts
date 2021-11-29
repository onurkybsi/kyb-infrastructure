/**
 * Represents errors occurred when external operation is processing
 */
export default class ExternalOperationError extends Error {
    constructor(errorMessage: string);
}
