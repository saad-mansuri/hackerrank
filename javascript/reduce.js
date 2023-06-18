let arr = [1,2,3,4,5,10]
let sum = 0
arr.forEach(item => {
    sum += item
}) 
console.log(sum);
// console.log(sumArr);

let total = 0
const reduc = arr.reduce((accum, curr) => {
    return total += curr
})

console.log(reduc);
// let totalsum = 0/
const reducSum = arr.reduce((accum, curr) => {
    return accum + curr
})

console.log(reducSum);