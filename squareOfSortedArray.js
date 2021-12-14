var sortedSquares = function(nums) {
    //square each number in array
    //push to array
    //sort
    //declare empty array
    const square = [];
    for (let i=0; i<nums.length; i++){
        square.push(nums[i] * nums[i]);
    }
    square.sort((a,b)=> a-b);
    console.log(square)
};
sortedSquares([-4,-1,0,3,10]);
sortedSquares([-7,-3,2,3,11]);