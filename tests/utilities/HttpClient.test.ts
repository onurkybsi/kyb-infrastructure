import { HttpClient, HttpMethods, InvalidParameterError } from "../../src/index";

it('Throws InvalidParameterError if baseURL is empty', () => {
    expect(() => new HttpClient("")).toThrow(InvalidParameterError);
})

it('Doesnt throw InvalidParameterError if baseURL is not empty', () => {
    expect(() => new HttpClient("localhost")).not.toThrowError();
})

it('SendRequest throws InvalidParameterError if path is empty', async () => {
    let client: HttpClient = new HttpClient("localhost");
    try {
        await client.SendRequest(HttpMethods.GET, "");
    } catch (error: any) {
        expect(error instanceof InvalidParameterError).toEqual(true);
    }
})