function roundToFirstDecimal(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
    return roundToFirstDecimal(((fahrenheit - 32) * 5/9))
}

const convertToFahrenheit = function(celsius) {
    return roundToFirstDecimal(celsius * 9/5 + 32)
}

console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32
