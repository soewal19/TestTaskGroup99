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


