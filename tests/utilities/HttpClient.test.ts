import { HttpClient, HttpMethods, HttpResponse, InvalidParameterError } from "../../src/index";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

it('HttpClient Throws InvalidParameterError if baseURL is empty', () => {
    expect(() => new HttpClient("")).toThrow(InvalidParameterError);
})

it('HttpClient Doesnt throw InvalidParameterError if baseURL is not empty', () => {
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
    mockAdapter.onGet('https://google.com.tr/').networkErrorOnce();
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.isSuccessful).toEqual(false)
})

it('SendRequest returns statusCode undefined if an error occures', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').networkErrorOnce();
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.statusCode).toEqual(undefined)
})

it('SendRequest returns body undefined false if an error occures', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').networkErrorOnce();
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.body).toEqual(undefined)
})

it('SendRequest returns isSuccessful true if response status code is greater than 200 and less than 300', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').replyOnce(200);
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.isSuccessful).toEqual(true)
})

it('SendRequest returns statusCode by status code of response returned remote server', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').replyOnce(200);
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.statusCode).toEqual(200)
})

it('SendRequest returns statusCode by status code of response returned remote server', async () => {
    // Arrange
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').replyOnce(200);
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.statusCode).toEqual(200)
})

it('SendRequest returns body by body of response returned remote server', async () => {
    // Arrange
    let responseBody: any = {};
    let client: HttpClient = new HttpClient("https://google.com.tr");
    let mockAdapter: MockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://google.com.tr/').replyOnce(200, responseBody);
    // Act
    let res: HttpResponse = await client.SendRequest(HttpMethods.GET, "/");
    // Assert
    expect(res.body).toEqual(responseBody)
})