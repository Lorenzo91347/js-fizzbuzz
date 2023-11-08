'use strict'
let ul = document.getElementById('list')

let startCounter = 0;
let endCounter = 100;

for (let counter = startCounter; counter <= endCounter; counter++) {
    if (counter % 3 === 0) {
        console.log("Buzz")
    }
    else if (counter % 5 === 0) {
        console.log("Fizz")
    }
    else if (counter % 5 === 0 && counter % 3 === 0) {
        console.log("FizzBuzz")
    }

    else {
        console.log(counter)
    }
}