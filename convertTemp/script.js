function convertToFahrenheit(celsius){
    return Math.round (((celsius * 9/5)+32) * 10) /10;
}
function convertToCelsius(fahrenheit){
    return Math.round (((fahrenheit -32) * 5/9) *10)/10;
}
console.log(convertToFahrenheit(0));
console.log(convertToCelsius(98.6));