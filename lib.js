function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0)
}

function avg(numbers) {
    return sum(numbers) / numbers.length
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr))
}

module.exports = {
    sum,
    avg,
    max,
}