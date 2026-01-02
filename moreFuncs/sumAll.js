const sumAll = function(a, b) {
    let sum = 0;

    if (a < b){
        for (let i = a; i <= b; i++){
            sum += i
        }
    } else {
        for (let i = b; i <= a; i++){
            sum += i
        }
    }
    console.log(sum)
}

sumAll(4, 1) // returns the sum of 1 + 2 + 3 + 4 which is 10