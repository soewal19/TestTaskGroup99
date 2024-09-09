# Sum to N Implementations

This repository contains three unique implementations of a function that calculates the summation of integers from 1 to n in JavaScript. Additionally, it includes unit tests for each implementation.

## Implementations

1. **sum_to_n_a**: Uses a for loop to iterate from 1 to n and accumulate the sum.
2. **sum_to_n_b**: Utilizes the arithmetic series formula to compute the sum in constant time.
3. **sum_to_n_c**: Implements a recursive approach to calculate the sum.

## Usage

You can run the implementations and tests in any JavaScript environment, such as a web browser console or Node.js.

### Example

```javascript
console.log(sum_to_n_a(5)); // Outputs: 15
console.log(sum_to_n_b(5)); // Outputs: 15
console.log(sum_to_n_c(5)); // Outputs: 15

Running Tests
To run the unit tests, simply call the runTests() function after defining the sum functions. The results will be logged to the console, indicating whether each test passed or failed.
Notes
Each implementation is designed to handle inputs less than Number.MAX_SAFE_INTEGER.
The tests cover various cases, including edge cases like 0 and 1.
License
This project is licensed under the MIT License.
text