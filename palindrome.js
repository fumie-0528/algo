function isPalindrome(string){
    for (var i=0; i<string.length/2; i++){
        var firstElement = string[i];
        var lastElement = string[string.length-i-1];
        if (firstElement == lastElement){
            //continue loop until end condition meets
        }else{
            return false;
        }
        }
        return true;
}    
        
console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("race_car"));
console.log(isPalindrome("my name is Fumie"));
console.log(isPalindrome("mynameemanym"));
console.log(isPalindrome("mynameemanYm"));


function isPalindrome(string){
    for (var i=0; i<string.length/2; i++){
        var firstElement = string[i];
        var lastElement = string[string.length-i-1];
        if (firstElement != lastElement){
            return false;
        }
        }
        return true;
}   

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("race_car"));
console.log(isPalindrome("my name is Fumie"));
console.log(isPalindrome("mynameemanym"));
console.log(isPalindrome("mynameemanYm"));

// Longest Palindrome
// For this challenge, we will look not only at the entire string, but also substrings within it.
// For a string, return the longest palindromic substring. Given ​"what up, dada?"​, return "dad"​. Given ​"not much"​, return ​"n"​. ​Include spaces​ as well (i.e. be strict, as in the “Is Palindrome” challenge): given ​"My favorite racecar erupted!"​, return ​"e racecar e"​.
// try O(n2) first
function longestPalindrome(string){
    var palindrome;
    for (var i=0; i<string/2; i++){
        var firstElement = string[i];
        var lastElement = string[string.length-i-1];

    }

    return palindrome
}