/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let sum=0
    const table = new Map()
    for(let item of nums )
    {
        if(table.get(item)==1)
        {
            table.set(item, table.get(item)+1)
            sum=sum-item
        }
        else if(false===table.has(item))
        {
            table.set(item,1)
            sum=sum+item
        }
      
    }
   
    return sum
};

const nums = [1,2,3,2]

const result= sumOfUnique(nums)
console.log(result);