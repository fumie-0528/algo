// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).
function threesFives(){
    var sum = 0;
    for (var i = 100; i <= 4000000; i++){
        if (i % 3 == 0){
            if (i % 5 == 0) {
            continue;
        }
        sum += i;
        }
        if (i % 5 == 0){
        sum += i;
        }
    }
    console.log(sum);
}
threesFives();

function betterThreesFives(start, end){
    var sum = 0;
    for (var i = start; i <= end; i++){
        if(i % 3 == 0){
            if(i % 5 == 0){
                continue;
            }
            sum += i;
        }
        if (i % 5 == 0){
            sum += i;
        }
    }
    console.log(sum);
}
betterThreesFives(100, 120);
betterThreesFives(100, 4000000);

// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
function generateCoinChange(cents){
    var dollars;
    var half;
    var quarters;
    var dimes;
    var nickels;
    var pennies;
    while (cents >= 100){
        dollar ++;
        cents -= 100; 
    }
    while (cents >= 50){
        half ++;
        cents -= 50; 
    }
    while (cents >= 25){
        quarters ++;
        cents -= 25; 
    }
    while (cents >= 10){
        dimes ++;
        cents -= 10;
    }
    while (cents >= 5){
        nickels ++;
        cents -= 5;
    }
    while (cents > 0){
        pennies ++;
        cents-= 1;
    }
    console.log(dollars, half, quarters, dimes, nickels, pennies);
}
generateCoinChange(94);


function messyMath(num){
    var sum = 0; 
    for (var i=0; i<=num; i++){
        if (i % 3 == 0) {
            continue;
        }
        else if (i % 7 == 0){
            sum += (i * 2);
        }
        else if (i == num/3){
            return -1;
        }else{
            sum += i;
        }
    }
    return sum;
}
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));

// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
function fibonacci(num){
    if (num <= 1){
        return num; 
    }else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));


// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. 

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
function sunToOne(num){
    var oneDigit;
    for (var i=0; i<num.length; i++){
        

    }
    return oneDigit
}
