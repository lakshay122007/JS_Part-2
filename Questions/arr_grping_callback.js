//  Q) Write a function called groupBy that takes a callback function as a parameter.

// The groupBy function should return another function (closure) that:
// Takes an array as input.
// Groups its elements based on the value returned by the callback function.
// Returns an object where keys are the group names and values are arrays of elements in that group.
// Example Usage:
// const numbers = [1, 2, 3, 4, 5];
// const groupEvenOdd = groupBy(function(n) {
//   return n % 2 === 0 ? "even" : "odd";
// });
// const groupedNumbers = groupEvenOdd(numbers);
// console.log(groupedNumbers["even"]); // [2, 4]
// console.log(groupedNumbers["odd"]);  // [1, 3, 5]


function groupBy(callback) {
    return function(arr) {
        let result = {};

        for (let i of arr) {
            let key = callback(i);

            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(i);
        }
        return result;
    };
}

