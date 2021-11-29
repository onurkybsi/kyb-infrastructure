/**
 * Represents errors occurred when invalid parameters passed to a function
 */
export default class InvalidParameterError extends Error {
    constructor(invalidParameterName: string, invalidParameterValue: any);
}
