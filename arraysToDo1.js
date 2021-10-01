// Push Front
function pushFront(arr, val){
    // newArr = [];
    // for (var i =0; i < arr.length; i++){
    //     newArr[0] = val;
    //     newArr.push(i+1);
    for (var i = arr.length - 1; i >= 0; i--) {   
        arr[i+1] = arr[i];                         
    }
    arr[0] = val; 
    return arr;
}
console.log(pushFront(["a","b","c","d","e"], "f"));       

// Pop Front
function popFront(arr){
    // newArr2 = [];
    // for (var i=1; i < arr.length; i++){
    //     newArr2.push(i+1);
    // }
    // return newArr2;
    var returnVal = arr[0]; 
    for (var i = 1; i < arr.length; i++) {  
        arr[i-1] = arr[i];                  
    }
    arr.pop(); // Remove the last value
    console.log(arr);
    return returnVal;
}
console.log(popFront(["a","b","c","d","e"]));     


// Insert At
function insertAt(arr, favFruit, index){             
    for (var i = arr.length - 1; i >= index; i--) {  
        arr[i+1] = arr[i];                         
    }
    arr[index] = favFruit;                      
    return arr;
}
console.log(insertAt(["apple", "banana", "grapes", "strawberry"], "mango", 2));


// // Remove At
function removeAt(arr, ind) {
    if (ind === ""){
        return null
    }
    if (isNaN(ind)){
        return null
    }
    if (ind >= arr.length || ind < 0) {
        return null; // Return an arbitrary value
    }
    ind = Math.floor(ind); 
    var returnVal = arr[ind]; 
    for (var i = ind + 1; i < arr.length; i++) {  
        arr[i-1] = arr[i];                   
    }
    
    arr.pop(); // Remove the last value
    // arr.length--; // Alternate way to remove last value
    console.log(arr);
    return returnVal;
}
console.log(removeAt(["a","b","c","d"],1000));     
console.log(removeAt(["a","b","c","d"],-100));  
console.log(removeAt(["a","b","c","d"],"Apple"));            
console.log(removeAt(["a","b","c","d"],1.5)); 
console.log(removeAt(["a","b","c","d"],null)); 

//swap pairs
function swapPairs(arr) { 
    for (var i = 0; i < arr.length - 1; i += 2) {  
        var temp = arr[i];                      
        arr[i] = arr[i+1];                      
        arr[i+1] = temp;                       
    }

    return arr;                                
}
console.log(swapPairs(["a","b","c","d","e","f"]));

function removeDuplicate(arr){
    //loop through the array from beginning
    for (var i = 0; i < arr.length-1; i++){    
        //check if there is duplicate 
        //duplicate is next to each other
        if ( arr[i] == arr[i+1]){                 
            //if this is true
            //delete arr[i]
            for (var j = i; j < arr.length -1; j++) {  
                //delete array[j]                             
                arr[j] = arr[j+1];                      
            }                                       
            arr.pop();                                
        }                                              
        }                                              
    return arr;                                           
}

console.log(removeDuplicate(["a","b","b","c","d","d","e"]));


function removeDupesV2(arr) {
    if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
        return;
    }
    var lastUniqueVal = arr[0];           
    var nextUniqueInd = 1;                 
    for (var i = 1; i < arr.length; i++) {  
        if (arr[i] != lastUniqueVal) {       
            lastUniqueVal = arr[i];          
            arr[nextUniqueInd] = arr[i];      
            nextUniqueInd++;                   
        }
    }
    arr.length = nextUniqueInd; // Remove the duplicates
}

console.log(removeDupesV2((["a","b","b","c","d","d","e"])));