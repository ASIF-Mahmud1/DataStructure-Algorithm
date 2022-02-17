/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {

    const table= new Map()
    let MAX=0
    for (item of nums)
    {
       if(table.has(item))
       {
        table.set(item,table.get(item)+1)
       }
       else 
       {
        table.set(item,1)
       }
    }
  //  console.log(table);

  for([key, value] of table)
  {
      let compliment= key-1
      if(table.has(compliment))
      {
          
          let totalCount= table.get(compliment)+ table.get(key)
          if(totalCount>MAX)
          {
              MAX=totalCount
          }
      }
  }

  return MAX
};

const  nums = [1,3,2,2,5,2,3,7] // output 5

const result= findLHS(nums)
console.log(result);