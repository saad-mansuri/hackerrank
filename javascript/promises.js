let myPromised = new Promise((resolve, reject) => {
    let promise = false
    if(!promise){
        resolve('promise resolved')
    }else{
        reject('promise rejected')
    }
})

myPromised.then(response => {
    console.log(response);
}).catch(err =>{
    console.log(err);
})
