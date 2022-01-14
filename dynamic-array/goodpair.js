/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
     let countPairs=0
     for(let i=0;i<nums.length;i++)
     {
       for(let j=0; j<nums.length;j++)
       {
        if(nums[i] == nums[j] && i < j)
        {
            countPairs++
        }
       }  
     
     }

return countPairs
};
const  nums = [1,1,1,1]
console.log(numIdenticalPairs(nums));