# kyb-infrastructure

Package which provides various functionalities for Typescript, Javascript development environments

## Installation

Use the package manager [npm](https://www.npmjs.com/package/kyb-infrastructure) to install kyb-infrastructure.

```bash
npm i kyb-infrastructure
```

## Usage

```javascript
import { HttpClient } from "kyb-infrastructure"

// For example, you can use HttpClient module as follows;
let httpClient = new HttpClient("https://google.com.tr");
let response = await client.SendRequest(HttpMethods.GET, "/");
console.log(response.isSuccessful);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
