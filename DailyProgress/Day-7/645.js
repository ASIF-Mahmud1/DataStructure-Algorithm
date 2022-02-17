/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let table= new Map ()
    let errorData= null
    for(let i=1;i <=nums.length;i++)
    {
        table.set(i)
    }


    for(item of nums)
    {
       if(table.has(item))
       {
           table.delete(item)
       }

       else
       {
           errorData= item
       }
    }
    return [errorData,...table.keys()]
   
};



const nums= [1,2,2,4]

const result= findErrorNums(nums)
console.log(result);