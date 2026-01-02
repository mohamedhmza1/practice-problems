const removeFromArray = function (arr, target) {
    return arr.filter(int => int !== target)
}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }