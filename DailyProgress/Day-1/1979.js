/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    let gcd=1
    const smallestNumber= Math.max(...nums)
    const largestNumber=  Math.min(...nums)
    for(let i=2;i<=smallestNumber;i++)
    {
     
        if(largestNumber%i===0 && smallestNumber%i===0)
        {
            gcd=i
        }
    }


  return gcd
};

const nums = [2,5,6,9,10]

const result= findGCD(nums)

console.log(result);


/**
 * See this solution 
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/discuss/1418809/javascript-direct-way-77ms
 * 
 */