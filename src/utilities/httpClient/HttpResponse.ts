/**
 * Represents HTTP response values
 * @author Onur Kayabasi
 */
export default interface HttpResponse {
    isSuccessful: boolean,
    statusCode?: number,
    body?: any
}