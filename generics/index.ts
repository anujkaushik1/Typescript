
const logMultipleDataTypes = <T>(value : T) : T => {

    return value;

}

const numValue = logMultipleDataTypes<number>(10);
console.log(numValue);

const strValue = logMultipleDataTypes<string>('hello');
console.log(strValue);

const booleanValue = logMultipleDataTypes<boolean>(false);
console.log(booleanValue);


// function overloading sol =>

const add = <T, U>(a : T, b : U) => {
    console.log(typeof a)
    console.log(typeof b)
}

add('anuj', 22);
add(54, true);