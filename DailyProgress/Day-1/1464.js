/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const firstMax= Math.max(... nums)
    const index = nums.indexOf(firstMax);
    nums.splice(index, 1);

    const secondMax= Math.max(... nums)
   // console.log(firstMax, secondMax);
    return (firstMax-1)* (secondMax-1)
    

};


const  nums = [1,5,4,5]

const result = maxProduct(nums)
console.log(result);