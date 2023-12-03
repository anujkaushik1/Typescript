
const num : number = 10;

console.log(num);

const str : string = 'Hello World';

console.log(str)

const main = (a : number, b : number) : number => {

    return a + b;

}

const ans : number = main(5,6);

console.log('*************************************')

const myNum : number = 55;
const myStr : string = 'hello';

const resNumStr : string = myNum + myStr;

console.log('result = ', resNumStr)

console.log('*************************************')

let nanValue : number = NaN;
let undefinedVal : undefined = undefined;
let nullValue : null = null;
console.log(nanValue, '--', undefinedVal, '--', nullValue)

console.log('*************************************')
console.log('')
console.log('')
// substr ques
const longText : string = '0123456789abcdefghijk';
const shortText : string = longText.substring(0, 10);
console.log(shortText)


console.log('')
console.log('')
// comparison

const str1 : string = 'hello world';
const str2 : string = 'hello worald';
const areEqual : boolean = str1 === str2;

console.log(areEqual)

console.log('')
console.log('')

const isEven = (num : number) : boolean => {
    return num % 2 == 0;
}

console.log(isEven(7))
console.log(isEven(18))

const isDivisible = (a : number) : boolean => {

    const res : boolean = a % 4 === 0 && a % 8 === 0;
    return res;
}

console.log(isDivisible(20))





