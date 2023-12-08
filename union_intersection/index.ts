
const userInput = (value : string | number) : string | number | null=>{

    if(typeof value == 'number'){
        return value * value;
    }

    if(typeof value == 'string'){
        return value.toUpperCase();
    }

    return null
}

console.log(userInput(23));
console.log(userInput('hello world'));

console.log('')
console.log('')
console.log('')
console.log('')

type User = {
    name : string,
    age : number,
}

type Employee = {
    id : number,
    desig : string
}

type EmployeeDetails = User | Employee;

const empDetails : EmployeeDetails = {
    id : 23,
    desig : 'Engineer',
    // above two are compulsary

    age : 23 
    // optional

}

type EmployeeDetails1 = User & Employee;

const empDetails1 : EmployeeDetails1 = {
    age : 23,
    name : 'anu',
    desig : 't',
    id : 2
}


// type H  ={
//     id : boolean
// }

// type K = {
//     id : number
// }

// type Hello = H | K;
// const kk : Hello = {
//     id : true
// }
const t = {anuj : 'hello'}
console.log({...t})