/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
     const result=[]
     nums.sort((first, second)=> first-second)
     console.log(nums);

     nums.forEach((ele,index)=>{
         if(target===ele)
         {
             result.push(index)
         }
     })
return result
};

const  nums = [1,2,5,2,3], target = 3
console.log(targetIndices(nums,target));

