
const strArray : string[] = ['my', 'name', 'is', 'anuj'];

for(const data of strArray){
    console.log(data);
       
}

for(let i : number = 0; i < strArray.length; i++){
    console.log(strArray[i])
}

strArray.forEach((ele : string) => console.log(ele))