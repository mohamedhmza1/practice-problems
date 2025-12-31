function copySorted (arr) {
    return arr.slice().sort()
}

let arr = ["banana", "apple", "cherry", "donut"];
let sorted = copySorted(arr);

console.log( arr );
console.log(sorted);
