var logMultipleDataTypes = function (value) {
    return value;
};
var numValue = logMultipleDataTypes(10);
console.log(numValue);
var strValue = logMultipleDataTypes('hello');
console.log(strValue);
var booleanValue = logMultipleDataTypes(false);
console.log(booleanValue);
// function overloading sol =>
var add = function (a, b) {
    console.log(typeof a);
    console.log(typeof b);
};
add('anuj', 22);
add(54, true);
