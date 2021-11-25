/**
 * Represents HTTP response values
 */
export default interface HttpResponse {
    isSuccessful: boolean,
    status?: number,
    body?: any
}