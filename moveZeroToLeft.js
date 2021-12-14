// Given an integer Array, move all elements that are 0 to the left while maintaining the order of other elements in the Array.  The array has to be modified in place.
function moveZeroLeft(arr) {
    if(arr.length < 1) {
        return;
    }
    
    let readIdx = arr.length - 1;
    let writeIdx = arr.length - 1;
    while (readIdx >= 0) {
        if(arr[readIdx] != 0) {
            arr[writeIdx] = arr[readIdx];
            writeIdx--;
        }
        readIdx--;
    }

    while (writeIdx >= 0) {
        arr[writeIdx] = 0;
        writeIdx--;
    }
}
let a = [1,10,20,0,59,63,0,88,0];
moveZeroLeft(a);
console.log(a);

