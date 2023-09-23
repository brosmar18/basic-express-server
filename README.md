# LAB - Class 02

## Project: Basic Express Server 

### Author: Bryan O. Garduno Gonzalez

### Problem Domain  

Build a modular Express server with the primary feature of a `/person` route that expects a "name" property in the user's query string. If provided, it returns a JSON object `{ name: "name provided" }`. Without the name, a "500" error is raised. The server will include two middleware modules. logger.js will log the request method and path to the console, and validator.js will check the query string for a `name` property in the `/person` route. Tests should be added for server.js, logger.js, and validator.js. 

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/brosmar18/basic-express-server/actions) 
- Dev [back-end server url](https://lab02-basic-express-server-dev.onrender.com) (when applicable)
- Main [back-end server url](https://lab02-basic-express-server-main.onrender.com) (when applicable)


### Collaborators

### Setup

#### `.env` requirements (where applicable)


A .env file is included in local repository. A .env-sample file is uploaed to the remote repo so collaborators understand what environmental variables are being used. 

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- **Server Modularization:** 
  - The server structure is modularized into separate folders for easier maintenance and scalability.
  - Entry point at `index.js` which requires `src/server.js`, `dotenv`, and sets up the server start on a specified PORT.
  - Server logic encapsulated in `src/server.js` which exports a `start()` method and a reference to the Express app.

- **Middleware Implementation:**
  - **Logger Middleware (`logger.js`):** 
    - Logs the request method and path for each incoming request.
    - Set up to run at the application level for all routes.
  - **Validator Middleware (`validator.js`):** 
    - Checks for a "name" property in the query string.
    - Proceeds if the name is valid; throws an error otherwise.

- **Error Handling:**
  - **404 Not Found (`404.js`):**
    - Sends a 404/Not-Found message as the response when a route or method is unrecognized.
  - **500 Server Error (`500.js`):**
    - Sends a 500/Server Error message when an internal server error occurs or when no name is provided in the query string.

- **Routes:**
  - **/person Route:**
    - Handles `GET` method.
    - Uses the validator middleware to check user input.
    - On valid name input, sends a JSON object with the name, e.g. `{"name": "fred"}`.
    - On invalid or absent name, triggers a 500 error.

- **Testing:**
  - **Integration Tests:**
    - Asserts 404 error on unrecognized routes and methods.
    - Asserts 500 error if no name is provided in the query string.
    - Asserts 200 status if the name is present in the query string.
    - Validates that given a name in the query string, the output object is correct.
  
  - **Unit Tests:**
    - **Logger Middleware (`logger.test.js`):**
      - Ensures that the request method and path are correctly logged.
      - Tests that the `next()` function is called.
      - Uses mocked request objects and `console.log` to validate the middleware's functionality.
    - **Validator Middleware (`validator.test.js`):**
      - Validates that the middleware moves to the next function when a name is provided in the query string.
      - Asserts an error is thrown when the name isn't provided.
      - Uses mocked request objects to simulate and test various query inputs.


#### Tests

<!-- Fill this in as you see fit -->

- **How do you run tests?**

  To run tests, simply use the command `npm test` or `jest` in the root directory of the project. This will execute all the tests, leveraging the Jest testing framework.

- **Any tests of note?**

  The integration tests in `server.test.js` validate the server's response for various routes and methods, ensuring that the correct status codes are returned based on the request. We also have unit tests for the `validator` middleware in `validator.test.js` which ensures that the validator works correctly by checking if a name is provided in the query string. Similarly, unit tests for the `logger` middleware in `logger.test.js` confirm that each request's method and path are logged correctly.

- **Describe any tests that you did not complete, skipped, etc.**

  As of the provided code, all specified tests have been implemented. No tests were skipped or left incomplete.



#### UML

![Lab-1 UML](assets/lab-01-uml.png)