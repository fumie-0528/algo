
function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let temp = arr[i];
            let j = i-1; 
            while ((j > -1) && (temp < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
    return arr;
}
console.log(insertionSort([1,5,8,2,7]))

function bubbleSort(arr){
    for (var i=0; i<arr.length; i++){
        for (var j=i+1; j<arr.length; j++){
        if (arr[j] < arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
    return arr;
}
console.log(bubbleSort([1,5,8,2,7]))