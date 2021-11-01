// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num){
    newArr = [];
    for (i = 0; i < num; i ++){
        newArr.push(i);
    }
    return newArr.length;
}
console.log(countDown(5));

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn([myArr]){
    console.log(myArr[0]);
    return myArr[1];
}
console.log(printAndReturn[1,2]);
console.log(printAndReturn[3,4]);
console.log(printAndReturn[5,6]);

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function firstPlusLength(arr){
    // if (isNaN(arr[0])){
    //     return null;
    // }
    sum = arr[0] + arr.length;
    return sum;
}

console.log(firstPlusLength([4,2,5,7,"r"]));
console.log(firstPlusLength(["t",2,5,7,"r"]));
console.log(firstPlusLength([9,2,5,7,"r", "apple", 3,7]));

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr){
    var val2 = arr[1];
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]> val2);
        count ++;
    }
    return count;
}
console.log(greaterThanSecond([1,3,5,7,9,13]));

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecondGen(arr){
    let newArr = [];
    let target = arr[1];
    for (var i=0; i < arr.length; i++){
        if (arr[i] > target){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.length);
    return newArr;
}
console.log(greaterThanSecondGen([4,3,2,8,7,13,16,1,2]));

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function lenVal(num1, num2){
    let arr = [];
    let num1Len = `${num1}`.length;
    if (num1Len == num2){
        arr.push(num1Len,num2);
        // arr.push(num2);
        console.log("Jinx!");
    }else{
        return null;
    }
    return arr
}
console.log(lenVal(12, 2));
console.log(lenVal(48, 1));
console.log(lenVal(128, 3));

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function fitFirstVal(arr){
    if (arr[0] < arr.length){
        console.log("Too Small!");
    }
    if (arr[0] > arr.length){
        console.log("Too Big!");
    }
    if (arr[0] == arr.length){
        console.log("Just right!");
    }
}
fitFirstVal([1,2,3]);
fitFirstVal([3,2,3]);
fitFirstVal([2,3]);
fitFirstVal([4,3]);

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees){
    var celsius = 5/9 * (fDegrees-32);
    return celsius
}
console.log(fahrenheitToCelsius(79));

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
function celsiusToFahrenheit(cDegrees){
    var fahrenheit = (9/5 * cDegrees) + 32
    return fahrenheit;
}
console.log(celsiusToFahrenheit(16));