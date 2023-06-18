// const person = {
//     first_name : 'Saad',
//     last_name : 'Mansuri',
//     fullName : function() {
//         console.log(`${this.first_name} ${this.last_name}`);
//     }
// }

// const person2 ={
//     first_name : 'Rollins',
//     last_name: 'Saad',
// }

// // person.fullName()
// person.fullName.call(person2)

let students = {
    firstname : 'Saad',
    lastname : 'Mansuri'
}
let student2 = {
    firstname : 'Rollins',
    lastname : 'Rock'
}

getStudents.call(students, 'ahmedabad', 'Gujarat')

function getStudents(hometown, state){
    console.log(this.firstname, this.lastname,  hometown, state);
}

getStudents.call(student2, 'ahmedabad', 'Gujarat')
getStudents.apply(student2, ['Maharashtra', 'Mumbai'])
const studentDetails = getStudents.bind(student2, 'Bihar', 'Patna')
studentDetails()