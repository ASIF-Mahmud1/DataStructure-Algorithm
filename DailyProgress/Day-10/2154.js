/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

const goDeeper=(number, table)=>{
    if(table.has(number))
    {
       return goDeeper(number*2, table)
    }
    else 
    {
        return number
    }
}
 var findFinalValue = function(nums, original) {
    const table = new Map()
    for(item of nums)
    {
        table.set(item)
    }

    const result = goDeeper(original, table)
    return result
};

let nums = [2,7,9], original = 4

let result= findFinalValue(nums,original)
console.log(result);
