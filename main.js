'use strict'
let ul = document.getElementById('list')

let startCounter = 1;
let endCounter = 100;

for (let counter = startCounter; counter <= endCounter; counter++) {
    const li = document.createElement('li');

    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
        li.append("Fizzbuzz");

    } else if (counter % 3 === 0) {
        console.log("Buzz");
        li.append("Buzz")

    } else if (counter % 5 === 0) {
        console.log("Fizz");
        li.append("Fizz")

    } else {
        console.log(counter);
        li.append(counter)
    }

    ul.append(li);

}
