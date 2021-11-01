function romanToInt (s){
    const romNum = new Map();
        romNum.set("I", 1);
        romNum.set("V", 5);
        romNum.set("X", 10);
        romNum.set("L", 50);
        romNum.set("C", 100);
        romNum.set("D", 500);
        romNum.set("M", 1000);

    let total = 0; 
    for (var i = 0; i < s.length; i++ ){
        let currVal = romNum.get(s[i]);
        let nextVal = romNum.get(s[i+1]);
        if (currVal < nextVal){
            total = total + nextVal - currVal;
            i++;
        }else{
            total = total + currVal;
        }
        
    }
    return total;
}
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));


