let arr = [1,2,3,4,5,10]
let sum = 0

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

// forEach not returning an any array 
// arr.forEach((val) => {
//     console.log('With forEach :',val * 2); 
// })

// students.forEach((val) => {
//     console.log('With forEach :',val.name + ' ' +val.grade);
// })

// map returns a new array base on condition
// const myarr = arr.map((val) => {
//     return val * 2
// })
// console.log('With map : ',myarr);


// const myarrObj = students.map((val) => {
//     return val.name
// })
// console.log('With map : ',myarrObj);


// filtering the array based on condition and return new array elementor if condition becomes true,...
//  .... if condition false its return blank array
// const myForeach = arr.map((item) => {
//     return item % 2 === 1
// })
// console.log(myForeach);

// const myFilter = arr.filter((item) => {
//     return item % 2 === 1
// })
// console.log(myFilter);

console.log(students);
const studentFilter = students.filter((item) => {
    return item.grade > 65
})
console.log(studentFilter);

// studentFilter.forEach((val, index, array) => {
//     console.log(val, index, array);
// })