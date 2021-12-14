function validAnagram (str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    //loop through string 1 and 2
    const char1 = [];
    const char2 = [];
    for (let i=0; i<str1.length; i++){
        char1.push(str1[i]);
        char1.sort();
    }
    for (let i=0; i<str2.length; i++){
        char2.push(str2[i]);
        char2.sort();
    }   
    console.log(char1);
    console.log(char2);
    if (char1 === char2){
        return true;
    }
    return false;
    }
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('anagram','aangamr'));
console.log(validAnagram(' ',' '));
console.log(validAnagram('awesome','awesom'));