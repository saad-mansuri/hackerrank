// for/in loop

// the javascript for/in statement loops through the properties of an object.

let myArrObj = {
    fname : 'Saad',
    sname : 'Mansuri',
    age : 25
}

let arr = ['saad', 'mansuri', 25]

// for (const iterator of myArrObj) {
//     console.log(iterator);
// }
for (const index in arr) {
    console.log(index);
}
// for (const [index, iterator ] of arr.entries()) {
//     console.log(index, iterator);
// }

// for (let [index, shark] of arr.entries()) {
// 	console.log(index, shark);
// }