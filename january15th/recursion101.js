// Factorial of N
const factorial = function(num) {  
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
factorial(5);

// Fibonacci Sequence
const fibonacci = function(num, n) {
    console.log(`Inside fib ${num} from fib ${n}`);
    if (num <= 1) {
        return num
    } else {
        return fibonacci(num - 1, num) + fibonacci(num - 2, n)
    }
}
fibonacci(5, 5);

// Flatten an array
function flatten(arr) {
    var result = []
    arr.forEach(function(element) {
        if (!Array.isArray(element)) {
            result.push(element)
        } else {
            result = result.concat(flatten(element))
        }
    })
    return result
}
console.log(flatten([1, [2], [3, [[4]]]]));

// Reverse a string
function reverse(str) {
    if (str.length === 0) return ''
    return str[str.length - 1] + reverse(str.substr(0, str.length - 1))
}
reverse('abcdefg');