function filterRangeInPlace(arr, a, b) {
    return arr
    .filter(
        function (arr) {
            for (i = 0; i < arr.length; i++)
                if (arr[i] >= a && array[i] <= b)
                    return arr[i]
        }
    )
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]