/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {

    nums.sort((first,second)=> first-second)
    console.log(nums);
    const length=nums.length
    const maxDiff= (nums[length-1]*nums[length-2])- (nums[1]*nums[0])
    return maxDiff
};

const nums = 
[1,6,7,5,2,4,10,6,4]
console.log(maxProductDifference(nums));