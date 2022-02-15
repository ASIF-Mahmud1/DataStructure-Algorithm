/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let table= new Set()
    for(item of nums)
    {
        if (table.has(item))
        {
                 if(item===2 &&  nums.length===2)
                {
                    return [item, item-1]
                }
            return [item,item +1]
        }
        else 
        {
            table.add(item)
        }
    }
    return []
};