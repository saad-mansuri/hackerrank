class Demo{
    constructor(message){
        this.message = message
    }
    demoMethod(){
        console.log(this.message);
    }
}
let user = new Demo('ES6 Classes')
user.demoMethod()