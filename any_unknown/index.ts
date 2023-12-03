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

// use case 
// can use properties of specific datatypes based on what data is coming
if(typeof num == 'string'){
    num.length
}

if(typeof num == 'object'){
    Object.keys(num)
}


