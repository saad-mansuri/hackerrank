// for/in loop

// the javascript for/in statement loops through the properties of an object.

let myArrObj = {
    fname : 'Saad',
    sname : 'Mansuri',
    age : 25
}

for (const key in myArrObj) {
    // console.log(key);
    // console.log(myArrObj[key]);
    if (Object.hasOwnProperty.call(myArrObj, key)) {  // this line check the key is available in the array of object or not, yes we can say its safety check.
        const element = myArrObj[key];
        console.log(element);
    }
}

const myObj = {
    name : 'saad',
    age : 25
}
console.log(Object.keys({...myObj, gender : 'male'})); // 
// Object.values(myObj) :- it return the all values from keys
// Object.keys(myObj) :- it return the all keys from that array of object 

let checkKeyObject = Object.hasOwnProperty.call(myObj, 'age') 
console.log(checkKeyObject); // return true bcouse age key is available in myObj


let arr = [1,2,3,4,5,6]

for (const key in arr) {
    console.log(arr[key]);
}