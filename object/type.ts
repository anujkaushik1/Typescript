
type Details = {
    name : string;
    age : number,
    address : {city : string; country : string};
}

const details : Details = {
    name : 'Anuj',
    age : 10,
    address : {
        city : 'Gurugram',
        country : 'India'
    },
}



const getDetails = (details : Details) => {
    console.log(details.name)
}

getDetails(details);


// // Define the function that takes an object as an argument
// function processObject(obj: any) {
//     // Do something with the object
//     console.log(obj.name);
//     // You can access object properties or perform operations here
// }

// // Create an object
// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// // Pass the object to the function
// processObject(myObject);
