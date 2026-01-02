const leapYears = function (year){
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour && (!isCentury || isDivisibleByFourHundred )) {
        return true
    } else {
        return false
    }
}

console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985)); // is not a leap year: returns false