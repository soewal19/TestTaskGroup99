# Three Ways to Sum to n

This repository contains three unique implementations of a function that calculates the sum of all integers from 1 to n in TypeScript. Each implementation has its own complexity and efficiency.
>>task1 Complexity: O(n)
This implementation uses a simple loop to iterate from 1 to n, adding each number to the sum variable. The time complexity is linear, as the number of iterations depends on the input n.

>>task2 Complexity: O(1)
This implementation uses the formula for the sum of an arithmetic series: n(n+1)/2. It calculates the sum directly based on the input n, without any loops or iterations. The time complexity is constant, as it takes the same amount of time regardless of the input size.

>> task3 Complexity: O(n)
This implementation uses the Array.from() method to create an array of numbers from 1 to n, and then uses the reduce() method to sum up all the elements in the array. While it has a linear time complexity like the first implementation, it may be less efficient due to the overhead of creating and manipulating the array.

>>Summary:
In summary, the second implementation using the formula is the most efficient, with a constant time complexity. The first and third implementations have a linear time complexity, with the first being slightly more efficient due to the lack of array creation and manipulation.

## Unit Tests

The project includes unit tests for each implementation to ensure their correctness. The tests are implemented without using any third-party libraries.

### Running Unit Tests

To run the unit tests, follow these steps:

1. **Install TypeScript** (if you haven't already):

   ```bash
   npm install -g typescript

Compile the TypeScript files:
Navigate to the project directory and run:
bash
tsc

Run the compiled JavaScript file:
After compilation, run the tests using Node.js:
bash
node dist/index.js

Make sure to replace dist/index.js with the path to your compiled test file if it's different.
Expected Output
If all tests pass, you should see the following message in the console:
text
All tests passed!

## Example Usage
You can call each implementation like this:
typescript
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15

## License
This project is licensed under the MIT License - see the LICENSE file for details.
text

