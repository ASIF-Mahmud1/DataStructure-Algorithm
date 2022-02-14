/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   
   const table= new Map()

     nums.forEach((ele,index)=>{
         let compliment= target- ele
         table.set(compliment,index)
     })

     for (let i=0; i<nums.length;i++)
     {
         if(table.has(nums[i]) && table.get(nums[i] )!== i )
         {
            return [i, table.get(nums[i] )]
         }
         else 
         {
             // keep iterating
         }
     }

};

const list=[3,2,4], sum=6
const result  =twoSum (list,sum)

console.log(result);