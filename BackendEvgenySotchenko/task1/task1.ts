
/*
# Task

Provide 3 unique implementations of the following function in TypeScript.

- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
 */


//task1
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//task2
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

//task3

function sum_to_n_c(n: number): number {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((sum, num) => sum + num, 0);
}