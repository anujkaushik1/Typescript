var num = 10;
console.log(num);
var str = 'Hello World';
console.log(str);
var main = function (a, b) {
    return a + b;
};
var ans = main(5, 6);
console.log('*************************************');
var myNum = 55;
var myStr = 'hello';
var resNumStr = myNum + myStr;
console.log('result = ', resNumStr);
console.log('*************************************');
var nanValue = NaN;
var undefinedVal = undefined;
var nullValue = null;
console.log(nanValue, '--', undefinedVal, '--', nullValue);
console.log('*************************************');
console.log('');
console.log('');
// substr ques
var longText = '0123456789abcdefghijk';
var shortText = longText.substring(0, 10);
console.log(shortText);
console.log('');
console.log('');
// comparison
var str1 = 'hello world';
var str2 = 'hello worald';
var areEqual = str1 === str2;
console.log(areEqual);
