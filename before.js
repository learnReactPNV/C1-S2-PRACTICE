
let numbers = [1, 2, 3, 4, 5]

numbers.push(6);
console.log(numbers)

let arrayMap = numbers.map((number) => { return number});
console.log(arrayMap)

let arrayAt = numbers.at(1);
console.log(arrayAt)

let arrayRemove = numbers.splice(1, 1);
console.log(arrayRemove)

let arrayFilter = numbers.filter((value) => value > 1);
console.log(arrayFilter)

let slicedNumbers = numbers.slice();
console.log(slicedNumbers)
