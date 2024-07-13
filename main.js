"use strict";
// 1.Simply Call Back Function
function sum(callBack, num1, num2) {
    callBack(num1 + num2);
}
function add(result) {
    console.log(`Result ${result}`);
}
sum(add, 6, 9);
// 2.Higher-order Call Back function
function cities(callBack, city1, city2, city3) {
    callBack("Pakistan", city1, city2, city3);
}
function countries(country, ...cities) {
    console.log(`Country ${country} `);
    cities.forEach(city => console.log(`${city} is the city of ${country}`));
}
cities(countries, "Lahore", "Karachi", "Multan");
//   5. Callback with Higher-Order Function
function double(x) {
    return x * 2;
}
function map(numbers, callback) {
    return numbers.map(callback);
}
const doubledNumbers = map([1, 2, 3], double);
console.log(doubledNumbers); // Output: [2, 4, 6]
