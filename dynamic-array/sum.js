/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
    let result=[]
    nums.forEach((ele,idx)=>{
        
        if(idx===0)
        {
            result.push(ele)
        }
        else 
        {
            const sum= ele+ result[result.length-1]
            result.push(sum)
        }
     
    })
        
        return result
    
    };
console.log(runningSum([1,12,3,5]));