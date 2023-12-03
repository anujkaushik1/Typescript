
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