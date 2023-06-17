console.log('spread oprator');
// console.log(2 + '2' * 2);

let myArr = [100, 5, 61, 900, 15]
let myArr2 = [0, 15, 161, 190, 11]
let oldArr = [...myArr, 12,31,200,]
let newArr = [...myArr2, ...oldArr]
console.log(newArr);

// console.log(myArr);
// console.log(Math.max(...myArr));

let person = [{
    name : 'saad',
    age : 20
},{
    name : 'saad',
    age : 20
}
]

let addCity = {
    hello : {...person},
    city : 'delhi'
}
console.log(addCity);


// let p1 = {...person, city : 'delhi'}
// console.log(p1);


// REST Operator 

// let args = [1,2,3,4]
// // let test = 'hello'
// const restOp = (args) =>{
//     console.log([...args, 1,2,3,4]);
// }
// restOp(args)

const filter = (...args) =>{
    return  args.filter(el => el === 1)
}

console.log(filter(1,2,3));

function show(...args) {  
    let sum = 0;  
    for (let i of args) {  
        sum += i;  
    }  
    console.log("Sum = "+sum);  
  }  
    
  show(10, 20, 30);  