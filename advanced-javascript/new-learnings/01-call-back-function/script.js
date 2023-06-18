'use strict'

// alert('')

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    // debugger
    let sum = num1 + num2;
    myCallback(sum);
    // console.log(myCallback)
    // document.getElementById("demo").innerHTML = sum;
}
// console.log(typeof myCalculator);

myCalculator(5, 5, myDisplayer);


// var mySum = function(a,b){
//     return a+b
// }

// console.log(typeof mySum);


var talk = function(fx, a, b){
    return fx(a,b);
    // console.log('hii')
}

var sayHi = function(x,y){
    // fx(x-y)
    console.log(x-y)
}
talk(sayHi, 4,5)

function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function calc(fx,a,b){
    return fx(a,b)
}

console.log(calc(sum,4,5));
// console.log(calc(subtract,4,5));

// console.log(sum(4,5));
// console.log(talk(sayHi));


function print(number, result) {
    console.log(`${number} is ${result}`);
}

function checkEvenOrOdd(number, callback) {
    if(number % 2 === 0){
        var result = 'Even'
    }else{
        var result = 'Odd'
    }
//   const result =  (number % 2 === 0) ? 'Even' : 'Odd';
  callback(number, result);
}

checkEvenOrOdd(56, print);


    



let dict = {
    name : "saad",
    age : 25
}

console.table(dict)