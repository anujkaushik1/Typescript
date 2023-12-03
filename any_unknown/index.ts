let a : any = 10;
a = 'hello';
a = true;

a = {hello : 'world'};

console.log(a);

console.log('---------------------------------------');

let num : unknown = 5;
num = 'hello'

num.map((ele) => console.log(ele))

console.log(num)


