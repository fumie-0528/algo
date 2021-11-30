// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
function makeItBig(arr){
    for (i = 0; i<arr.length; i++){
        if (arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr
}
console.log(makeItBig([-1,3,5,-5]) );

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
    var lowestVal;
    var highestVal;
    for (i=0; i<arr.length; i++){
        if (arr[i] < arr[i-1]){
            lowestVal = arr[i];
        }
        if (arr[i] > arr[i-1]){
            highestVal = arr[i];
        }
    }
    console.log(lowestVal);
    return highestVal;
}
console.log(printLowReturnHigh([3,4,1,9,10,23]));

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

