let arr = [1, 2, 3, 4, 8, 11]

let evenArr = []
for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 1) {
        // console.log('even :' + arr[index]);
        evenArr.push(arr[index])
    } else {
        // console.log('odd :' + arr[index]);
    }
}
console.log(evenArr);