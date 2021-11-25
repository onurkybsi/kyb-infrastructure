import { HttpClient, HttpMethods, HttpResponse, InvalidParameterError } from "../../src/index";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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

it('SendRequest returns isSuccessful false if an error occures', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr').networkErrorOnce();
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.isSuccessful).toEqual(false)
})