var personInfo = ['anuj', 2, true];
personInfo.push('hello');
console.log(personInfo);
var personInfo2 = ['anuj', 23, false];
// personInfo2.push('test');  //error
console.log(personInfo2);
var studentInfo = [['Maths', 83], ['English', 94]];
console.log(studentInfo);
var weatherInfo = ['Gurugram', 23, 'Rainy'];
var showWeatherConditions = function (weatherData) {
    for (var _i = 0, weatherData_1 = weatherData; _i < weatherData_1.length; _i++) {
        var data = weatherData_1[_i];
        console.log(data);
    }
};
showWeatherConditions(weatherInfo);
