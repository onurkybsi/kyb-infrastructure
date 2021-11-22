import HttpStatusCode from "./HttpStatusCodes";

const checkHttpStatusCodeIsSuccessful = (statusCode: number): boolean => statusCode >= HttpStatusCode.OK && statusCode < HttpStatusCode.MultipleChoices;

export default { checkHttpStatusCodeIsSuccessful }