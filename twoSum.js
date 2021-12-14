
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++ ){
        if ((nums[i] + nums [i+1]) == target) {
            return [i, i+1]
        }
    }
};
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));


var twoNumberSum = function(array, target) {
    for (let i=0; i<array.length; i++ ){
        for (let j=i+1; j<array.length; j++){
            if ((array[i] + array[j]) === target) {
                return [array[i], array[j]];
        }
    }
}
    return [];
};
console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10));
