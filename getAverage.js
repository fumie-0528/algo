function getAverage(grades){
    var sum = 0;
    for( var i = 0; i < grades.length; i++ ){
        sum += grades[i]; 
        
    }
    console.log(sum);
    var avg = sum/grades.length;
    return avg;
}

console.log(getAverage([12,23,34,45]));

// var total = 0;
// for(var i = 0; i < grades.length; i++) {
//     total += grades[i];
// }
// var avg = total / grades.length;