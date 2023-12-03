type Details = {
    name : string;
    age : number;
    greet : (country : string) => string;
}

const details : Details = {
    name : 'Anuj',
    age : 10,
    greet : (country) : string => {return `I am from ${country}`}
}

console.log(details.greet('India'))

