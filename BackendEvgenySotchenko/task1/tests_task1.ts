function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(message);
    }
}

function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

function sum_to_n_c(n: number): number {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((sum, num) => sum + num, 0);
}

function testSumToNa(): void {
    assert(sum_to_n_a(5) === 15, 'sum_to_n_a(5) should be 15');
    assert(sum_to_n_a(10) === 55, 'sum_to_n_a(10) should be 55');
}

function testSumToNb(): void {
    assert(sum_to_n_b(5) === 15, 'sum_to_n_b(5) should be 15');
    assert(sum_to_n_b(10) === 55, 'sum_to_n_b(10) should be 55');
}

function testSumToNc(): void {
    assert(sum_to_n_c(5) === 15, 'sum_to_n_c(5) should be 15');
    assert(sum_to_n_c(10) === 55, 'sum_to_n_c(10) should be 55');
}

function runTests(): void {
    testSumToNa();
    testSumToNb();
    testSumToNc();
    console.log('All tests passed!');
}

runTests();