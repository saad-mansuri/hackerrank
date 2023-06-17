var msg = document.getElementById("demo");

function f1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            msg.innerHTML += " <p>f1 is starting</p> ";
            msg.innerHTML += " <p>f1 is ending</p> ";
            resolve();
        }, 100);
    })
}
async function f2() {
    msg.innerHTML += " <p>f2 is starting</p> "; 
    await f1(); 
    msg.innerHTML += " <p>f2 is ending</p> "; 
}
    f2(); 



// var msg = document.getElementById("demo");

// function f1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             msg.innerHTML += " <p>f1 is starting</p> ";
//             msg.innerHTML += " <p>f1 is ending</p> ";
//             resolve(1);
//         }, 100);
//     })
// }
// async function f2() {
//     msg.innerHTML += " <p>f2 is starting</p> ";
//     var p = await f1();
//     console.log(p)
//     if (p == 1) msg.innerHTML += " <p>Promise Received</p> "
//     msg.innerHTML += " <p>f2 is ending</p> ";
// }
// f2();


var msg = document.getElementById("demo");

function f1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            msg.innerHTML += " <p>f1 is starting</p> ";
            msg.innerHTML += " <p>f1 is ending</p> ";
            resolve();
        }, 1000);
    })
}

function f3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            msg.innerHTML += " <p>f3 is starting</p> ";
            msg.innerHTML += " <p>f3 is ending</p> ";
            resolve();
        }, 1000);
    })
}

async function f2() {
    msg.innerHTML += " <p>f2 is starting</p> ";
    await f1();
    await f3();
    msg.innerHTML += " <p>f2 is ending</p> ";
}
f2();