// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1


var singleNumber = function(nums) {
    const sortedNums = nums.sort(function(a,b){return a-b});
    console.log(sortedNums);
    for (let i=0; i<sortedNums.length; i=i+2){
        if (sortedNums[i] !== sortedNums[i+1]){
            return sortedNums[i];
            }
        }
    }
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,4,3,1,6,5,3,1,5]));