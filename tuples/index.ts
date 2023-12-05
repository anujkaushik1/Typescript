
type Person = [string, number, boolean];

const personInfo : Person = ['anuj', 2, true];

personInfo.push('hello');

console.log(personInfo);

type Person2 = readonly [string, number, boolean];
const personInfo2 : Person2 = ['anuj', 23, false];
// personInfo2.push('test');  //error

console.log(personInfo2);


// Ques1

type Students =  [string, number];

const studentInfo : Students[] = [['Maths', 83], ['English', 94]];

console.log(studentInfo)

// Ques2

type Weather = [string, number, string];

const weatherInfo : Weather = ['Gurugram', 23, 'Rainy'];

const showWeatherConditions = (weatherData : Weather) : void => {

    for(const data of weatherData){
        console.log(data)
    }

}

showWeatherConditions(weatherInfo);




