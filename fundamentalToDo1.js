// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

 var myNumber = 42;
 var myName = "Fumie";
 myNumber = myName;
 console.log(myNumber);

//  Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
function printNum(){
for (var num1 = -52; num1 <= 1066; num1 ++){
    console.log(num1)
} 
printNum();

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful() {
for (var i = 0; i < 98; i++) {
    console.log('good morning');
}
}
beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
function multiplesOfThree(){
for (var num2 = -300; num2 > 0; num2 *= 3){
    if (num2 == -3){
        continue;
    }
    if (num2 == -6){
        continue;
    }
    console.log(num2);
}
}
multiplesOfThree()

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
function printIntegers(){
    var num = 2000;
    while (num < 5280){
        console.log(num);
        num ++;
    }
}
printIntegers();

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
function sayItsYourBirthday(bM, bD){
    if (bM == 5 && bD == 28){
        console.log("How did you know?");
    }else{
        console.log("Just another day...");
    }
    }
sayItsYourBirthday(5,28);
sayItsYourBirthday(6,21);
sayItsYourBirthday(9,9);
sayItsYourBirthday(4,17);

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isItLeapYear(num3){
    if(num3 % 4 == 0){
        console.log("it is a leap year");
    }
    if(num3 % 100 == 0){
        console.log("it is a leap year");
    }
    if(num3 & 400 == 0){
        console.log("it is a leap year");
    }else{
        console.log("it is a regular year");
    }
}
isItLeapYear(1955);
isItLeapYear(1977);
isItLeapYear(2000);
isItLeapYear(2021);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
function printAndCount(){
    var numCount = 0
    for (var num4 = 512; num4 < 4096; num4 *= 5){
        console.log(num4);
        numCount ++;
    }
    console.log(numCount);
}
printAndCount()

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
function multiplesOfSix(){
    var num5  = 1;
    while (num5 < 60,000);
    num5 *= 6 ;
    console.log(num5);
    num5 ++;
}
multiplesOfSix()

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
function countingDojoWay(){
    for (var i = 1; 1 < 100; i++){
        if (i % 5 == 0){
            console.log(i);
            console.log("Coding");
        }
        if (i % 10 == 0){
            console.log(i);
            console.log("Dojo");
        }
    }
}
countingDojoWay();

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
function whatDoYouKnow(val){
    console.log(val);
}
whatDoYouKnow(25);
whatDoYouKnow("Is this ok?");

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
function printOdd(){
    sum = 0;
    for (var i = -300000; i < 300000; i ++){
        if (i % 2 == 0);
        sum += i 
    }
    console.log(sum);
}
printOdd();

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
function countdownByFours(){
    var num6 = 2016;
    while (num6 > 0);
    console.log(num6);
    num6 -= 4; 
}
countdownByFours();

