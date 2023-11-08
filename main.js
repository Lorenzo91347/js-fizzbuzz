'use strict'
//ul element in html fetched

let ul = document.getElementById('list')

// counter start and end variables declared

let startCounter = 1;
let endCounter = 100;

//"for" loop started 

for (let counter = startCounter; counter <= endCounter; counter++) {
    const li = document.createElement('li');

    // divisible by 3 and 5

    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
        li.append("Fizzbuzz");

        //divisible by 3

    } else if (counter % 3 === 0) {
        console.log("Buzz");
        li.append("Buzz")

        //divisible by 5

    } else if (counter % 5 === 0) {
        console.log("Fizz");
        li.append("Fizz")

        //base posting and stamping

    } else {
        console.log(counter);
        li.append(counter)
    }

    ul.append(li);

}
