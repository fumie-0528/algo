var maxSubArray = function(nums) {
    var maxSum = 0;
    var currSum = 0; 
    for (var i=0; i < nums.length-1; i++){   
        for (var j=i; j<nums.length; j++){ 
            currSum += nums[j];               
        if (currSum > maxSum){
            maxSum = currSum;
        } 
        }
        currSum = 0;
    }
    return maxSum;
    
};