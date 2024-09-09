// Unit Tests for the sum_to_n functions
function runTests() {
    console.log("Running tests...");

    // Test cases
    const testCases = [
        { input: 5, expected: 15 },
        { input: 10, expected: 55 },
        { input: 0, expected: 0 },
        { input: 1, expected: 1 },
        { input: 100, expected: 5050 },
    ];

    // Testing sum_to_n_a
    testCases.forEach(({ input, expected }) => {
        const result = sum_to_n_a(input);
        console.log(`sum_to_n_a(${input}) = ${result} - ${result === expected ? '✅' : '❌'}`);
    });

    // Testing sum_to_n_b
    testCases.forEach(({ input, expected }) => {
        const result = sum_to_n_b(input);
        console.log(`sum_to_n_b(${input}) = ${result} - ${result === expected ? '✅' : '❌'}`);
    });

    // Testing sum_to_n_c
    testCases.forEach(({ input, expected }) => {
        const result = sum_to_n_c(input);
        console.log(`sum_to_n_c(${input}) = ${result} - ${result === expected ? '✅' : '❌'}`);
    });
}
function init()
{
// Execute tests
    runTests();

}
init();