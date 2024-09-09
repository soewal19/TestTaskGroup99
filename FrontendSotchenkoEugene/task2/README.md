# Currency Swap Application

This Currency Swap Application allows users to swap assets from one currency to another through a user-friendly interface. Built using React, Redux, and React Router, the application provides a seamless experience for currency conversion.

## Project Overview

The Currency Swap Application is designed to help users easily convert one currency to another by entering an amount and selecting the currencies they wish to swap. The application fetches real-time currency prices from an external API and provides visual feedback for user interactions.

## Features

- **Currency Selection**: Users can select currencies from a dropdown menu.
- **Amount Input**: Users can input the amount they wish to swap.
- **Input Validation**: The form validates the input to ensure the amount is greater than zero.
- **Exchange Rate Calculation**: The app fetches exchange rates from an external API.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.
- **Redux State Management**: Utilizes Redux for state management of selected currencies and amounts.
- **End-to-End Testing**: E2E tests are implemented using Cypress to ensure functionality and reliability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React Router**: A library for routing in React applications.
- **Cypress**: A testing framework for end-to-end testing.
- **CSS**: For styling the application.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/soewal19/TestTaskGroup99/tree/main/FrontendSotchenkoEugene
  ```
Install dependencies:
bash
npm install

Start the application:
bash
npm start

This will start the development server and open the application in your default web browser.
## Usage
Navigate to the home page to access the currency swap form.
Select the currencies you wish to swap from the dropdown menus.
Enter the amount you want to swap in the input field.
Click the "Swap" button to see the result in an alert box.
The application will display an error message if the input amount is invalid.
## Running Tests
To run the end-to-end tests using Cypress, follow these steps:
Ensure your development server is running.

__Open Cypress:__
```bash
npx cypress open
```
Select the currencySwapForm.spec.js file from the Cypress Test Runner to execute the tests.
## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.
## License
This project is licensed under the MIT License.
