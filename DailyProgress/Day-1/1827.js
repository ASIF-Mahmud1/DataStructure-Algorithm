/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let steps=0
    for(let i=0;i<nums.length-1;i++)
    {
        if(nums[i]>=nums[i+1])
        {
            const increment= 1+ nums[i]-nums[i+1]
            nums[i+1]= nums[i+1]+increment
            steps=steps+increment
        }
    }

    console.log(nums);

    return steps
};

const   nums = [8]

const result= minOperations(nums)
console.log(result);