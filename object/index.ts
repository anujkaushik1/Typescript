
const userDetails : {
    name : string;
    age : number,
    address : {city : string; country : string};
    [key : string] : any
} = {
    name : 'Anuj',
    age : 10,
    address : {
        city : 'Gurugram',
        country : 'India'
    },
}

userDetails.newField  = 'New Field';
userDetails.added = 'added';
userDetails.keyAdded = 'keyAdded';

for(const key in userDetails){
    console.log(userDetails[key])
}