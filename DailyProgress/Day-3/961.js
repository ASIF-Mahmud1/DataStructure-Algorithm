/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
  let table= new Map()

  for(let item of nums)
  {
      if(table.has(item))
      {
        //  return item
      }
      else 
      {
          table.set(item)
      }
      console.log(table, table.entries());
  }

};

const nums = [1,5,2,5,3,5,4,5]

const result= repeatedNTimes(nums)
console.log(result);