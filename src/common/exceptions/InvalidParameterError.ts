export default class InvalidParameterError extends Error {
    constructor(invalidParameterName: string, invalidParameterValue: any) {
        super(`${invalidParameterName} is not valid: ${invalidParameterValue}`);
    }
}