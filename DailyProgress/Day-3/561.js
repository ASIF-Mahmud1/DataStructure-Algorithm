/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {

    const result= nums.sort((first,second)=>{
        return first-second
    }).reduce((previous,current,index)=>{
        if (index%2===0)
        {
            return previous+ current
        }
        else 
        {
              return previous
        }
       
    },0)

    
    
  return result
};

const nums = [1,4,3,2]

const result= arrayPairSum(nums)
console.log(result);