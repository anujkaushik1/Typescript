var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userInput = function (value) {
    if (typeof value == 'number') {
        return value * value;
    }
    if (typeof value == 'string') {
        return value.toUpperCase();
    }
    return null;
};
console.log(userInput(23));
console.log(userInput('hello world'));
console.log('');
console.log('');
console.log('');
console.log('');
var empDetails = {
    id: 23,
    desig: 'Engineer',
    // above two are compulsary
    age: 23
    // optional
};
var empDetails1 = {
    age: 23,
    name: 'anu',
    desig: 't',
    id: 2
};
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
var t = { anuj: 'hello' };
console.log(__assign({}, t));
