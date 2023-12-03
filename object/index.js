var userDetails = {
    name: 'Anuj',
    age: 10,
    address: {
        city: 'Gurugram',
        country: 'India'
    },
};
userDetails.newField = 'New Field';
userDetails.added = 'added';
userDetails.keyAdded = 'keyAdded';
for (var key in userDetails) {
    console.log(userDetails[key]);
}
