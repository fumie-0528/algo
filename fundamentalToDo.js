// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function Sigma(num) {
    var sigma = 0
    for (var i=1; i<=num; i++){
        sigma += i
    }
    return sigma
}

console.log(Sigma(6));


// Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 

// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num){
    if (num < 0){
        return null;
    }else{
        var product = 1;
        for (var i=1; i<=num; i++){
            product *= i;
        }
    }
    return product;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(-2));

// recursion
function factorial2(num){
    if (num ==1){
        return 1;
    }
    return num * factorial2(num-1)
}

//FIBONACCI
function fibonacci(num){
    if (num ==0){
        return 0;
    }
    else if (num ==1){
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

// Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.   
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
// (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

function drawLeftStars(num){
    outPut = " "
    for (var i = 0; i <= num; i++){
        outPut += "*";
    }
    for (var j=0; j< 75-num; j++){
        outPut += ".";
    }
    return outPut;
}
console.log(drawLeftStars(5));

function drawRightStars(num){
    outPut = " "
    for (var j=0; j< 75-num; j++){
        outPut += ".";
    }
    for (var i = 0; i <= num; i++){
        outPut += "*";
    }
    return outPut;
}
console.log(drawRightStars(5));

function drawCenterStars(num) {
    var returnVal = '';
    for(var i = 0; i < (((75-num)/2)); i++) {
        returnVal += '.';
    }
    for(var j = 0; j < num; j++) {
        returnVal += '*';
    }
    for(var k = 0; k < ((75-num)/2)-.5; k++) {
        returnVal += '.';
    }
    return returnVal;
}
console.log(drawCenterStars(70));
console.log(drawCenterStars(67));

// Character Art
// From the above, derive the following that accepts and draws the given characters, not just asterisks:

// drawLeftChars(num,char)
// drawRightChars(num,char)
// drawCenteredChars(num,char)
// For all three of these, you can safely assume that 'char'is a string with the length of 1.

function drawLeftChars(num, char){
    outPut = " "
    for (var i = 0; i <= num; i++){
        outPut += char;
    }
    for (var j=0; j< 75-num; j++){
        outPut += ".";
    }
    return outPut;
    }
    console.log(drawLeftChars(5, "b"));

    function drawRightChars(num, char){
        outPut = " "
        for (var j=0; j< 75-num; j++){
            outPut += ".";
        }
        for (var i = 0; i <= num; i++){
            outPut += char;
        }
        return outPut;
    }
    console.log(drawRightChars(5, "a"));

    function drawCenterChars(num, char) {
        var returnVal = '';
        for(var i = 0; i < (((75-num)/2)); i++) {
            returnVal += '.';
        }
        for(var j = 0; j < num; j++) {
            returnVal += char;
        }
        for(var k = 0; k < ((75-num)/2)-.5; k++) {
            returnVal += '.';
        }
        return returnVal;
    }
    console.log(drawCenterChars(70, 'c'));
    console.log(drawCenterChars(67, 'c'));