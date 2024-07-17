# Task Manager Application with Cypress-Cucumber Testing

## Project Structure

- `app`: Contains the React application.
- `cypress-cucumber`: Contains Cypress-Cucumber tests.

## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Getting Started

### Setting Up the React Application

1. Navigate to the `app` directory:

    ```sh
    cd react-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the React application:

    ```sh
    npm start
    ```

   The application should now be running on `http://localhost:3000`.

### Setting Up Cypress-Cucumber Tests

1. Navigate to the `cypress-tests` directory:

    ```sh
    cd ../cypress-tests
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Open Cypress in interactive mode:

    ```sh
    npm run test
    ```


### Project Structure Details

#### `app`

This folder contains a simple Task Manager application built with React. It allows users to:
- Add new tasks with a title and description.
- Display a list of tasks with their titles and descriptions.
- Mark tasks as completed.
- Delete tasks from the list.

#### `cypress-tests`

This folder contains the end-to-end tests for the Task Manager application using Cypress and Cucumber.

- **Feature Files**: Located in `cypress/integration/cucumber/Task.feature`. These files contain the Gherkin syntax for defining test scenarios.
- **Step Definitions**: Located in `cypress/integration/cucumber/task/taskSteps.js`. These files contain the implementation of the steps defined in the feature files.
- **Cypress Configuration**: Located in `cypress.config.js`.




