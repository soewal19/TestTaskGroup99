
// Implementation A: Using a for loop
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Implementation B: Using the arithmetic series formula
var sum_to_n_b = function(n) {
    return (n * (n + 1)) / 2;
};

// Implementation C: Using recursion
var sum_to_n_c = function(n) {
    if (n <= 0) return 0; // Base case
    return n + sum_to_n_c(n - 1); // Recursive case
};