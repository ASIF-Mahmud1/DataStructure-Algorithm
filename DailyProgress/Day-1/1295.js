/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers_1 = function(nums) {
     let evenDigits=0
    for(let i=0;i<nums.length;i++)
    {
        let countDigit=1
        while(nums[i]>=10)
        {
            nums[i]= nums[i]/10
            countDigit++
        }
        if(countDigit%2===0)
        {
            evenDigits++
        }
    }
    return evenDigits
};

var findNumbers = function(nums) {
 return  nums.reduce((acc, currentNumber)=>{
       let length= String(currentNumber).length
       if(length%2===0)
       {
         return  ++acc
       }
       else 
       {
           return acc
       }
      
   },0)
}

const  nums = [12,345,2,6,7896]
const result= findNumbers(nums)
console.log("lil",result);