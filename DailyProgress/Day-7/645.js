/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let table= new Map ()
    for(let i=0;i <nums.length;i++)
    {
        if (table.has(nums[i]))
        {
              table.set(nums[i], {value:false, position:i})
            
        }
        else 
        {
            table.set(nums[i], {value:false, position:i})
        }
    }

    console.log(table);
    for(let i=1;i <=nums.length;i++)
{
    if(table.get(i)===undefined)
    {
        if(table.get(i-1)===true )
        {
         return[i,i+1]
        }
        else 
        {
            return[i-1,i]
        }
    }
}
};



const nums= [2,2]

const result= findErrorNums(nums)
console.log(result);