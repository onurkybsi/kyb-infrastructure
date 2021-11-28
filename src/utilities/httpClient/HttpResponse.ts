/**
 * Represents HTTP response values
 */
export default interface HttpResponse {
    isSuccessful: boolean,
    statusCode?: number,
    body?: any
}