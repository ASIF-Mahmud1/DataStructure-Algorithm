/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let table= new Map()

    for(item of nums)
    {
       if( table.has(item))
       {
          table.set(item, table.get(item)+1)
       } 
       else
       {
           table.set(item,1)
       }
    }

    for (const [key, value] of table.entries()) {
        if(value===1)
        {
            return key
        }

      }
};


// Another implementation 

var singleNumber_v2 = function(nums) {

    let table= new Set()
    for(item of nums)
    {
        if(table.has(item))
        {
             table.delete(item)
        }
        else 
        {
            table.add(item)
        }
    }

    return [...table][0]
}

const nums = [4,1,2,1,2]
const result= singleNumber_v2(nums)
console.log(result)