/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i=i+2)
    {
       const frequency= nums[i]
       const value= nums[i+1]
       const temp =[...new Array(frequency)].fill(value)
       console.log("temp",temp);
       result= result.concat(temp)
    }
    return result
};

const nums = [1,2,3,4]
console.log(decompressRLElist(nums))