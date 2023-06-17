// console.log('callback');

// document.write(myDisplay())
const myDisplay = sum =>{
    document.getElementById('result').innerHTML= sum
}
const myCalculator = (num1, num2, myCallback) =>{
    let sum = num1 * num2
    myCallback(sum)
}

myCalculator(5,15,myDisplay)

// Callback Start 


function add(x,y){
    return x + y
}
function sub(x,y){
    return x - y
}
function calculate(x,y,operation){
    return operation(x,y)
}

console.log(calculate(2,2,add));
console.log(calculate(2,2,sub));


// Callback END



// Did commented for debug another program
// Callback hell 
// runDirection(100, 'Top', function(){
//     runDirection(200, 'Left', function(){
//         runDirection(300, 'Bottom', function(){
//             runDirection(400, 'Right', function(){

//             })
//         })
//     })
// })


// Did commented for debug another program

// solution of callbackk to use promise
// runDirection(100,'Top')
// .then(()=> runDirection(200, 'Left'))
// .then(()=> runDirection(300, 'Bottom'))
// .then(()=> runDirection(400, 'Right'))